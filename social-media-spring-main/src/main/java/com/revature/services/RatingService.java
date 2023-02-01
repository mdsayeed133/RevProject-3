package com.revature.services;


import com.revature.dtos.RatingDTO;
import com.revature.models.Employee;
import com.revature.models.Rating;
import com.revature.models.Tag;
import com.revature.repositories.RatingRepository;
import com.revature.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;
    private EmployeeService employeeService;
    private TagRepository tagRepository;


    @Autowired
    public RatingService(RatingRepository ratingRepository, EmployeeService employeeService, TagRepository tagRepository)
    {
        this.ratingRepository = ratingRepository;
        this.employeeService = employeeService;
        this.tagRepository = tagRepository;
    }

    public Rating createRating(RatingDTO rDTO)
    {
        Employee emp = employeeService.getEmployeeById(rDTO.getEmployeeId());
        Tag tag1 = tagRepository.findById(rDTO.getTags1()).orElse(null);
        Tag tag2 = tagRepository.findById(rDTO.getTags2()).orElse(null);
        Tag tag3 = tagRepository.findById(rDTO.getTags3()).orElse(null);

        //Need to implement getEmployeeById
        Rating newRating = new Rating(emp, rDTO.getScore(), tag1, tag2, tag3);
        return ratingRepository.save(newRating);
    }

    public List<Employee> getEmployeeByTags(int tag1)
    {
        Tag searchTag = tagRepository.findById(tag1).orElse(null);
        return ratingRepository.findByTag(searchTag).orElse(null);
    }

    public double getEmployeeAvgRating(int employeeId)
    {
        Employee employee = employeeService.getEmployeeById(employeeId);
        List<Rating> ratingList = ratingRepository.findByEmployee(employee).orElse(null);

        double total = 0;
        for(int x = 0; x < ratingList.size(); x++)
        {
            total += ratingList.get(x).getScore();
        }
        double averageScore = total / ratingList.size();

        return averageScore;
    }







}
