package com.revature.services;


import com.revature.models.Employee;
import com.revature.models.Rating;
import com.revature.models.Tags;
import com.revature.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;
    private EmployeeService employeeService;


    @Autowired
    public RatingService(RatingRepository ratingRepository, EmployeeService employeeService)
    {
        this.ratingRepository = ratingRepository;
        this.employeeService = employeeService;
    }

    public Rating createRating(int employeeId, int score, Tags tags1, Tags tags2, Tags tags3)
    {
        //Need to implement getEmployeeById
        Rating newRating = new Rating(employeeService.getEmployeeById(employeeId), score, tags1, tags2, tags3);
        return newRating;
    }

    public Employee getEmployeeByTags(Tags tag1, Tags tag2, Tags tag3)
    {
        return null;
    }

    public double getEmployeeAvgRating(int employeeId)
    {
        Employee employee = employeeService.getEmployeeById(employeeId);
        List<Rating> ratingList = ratingRepository.findByEmployee(employee).orElse(null);
        if(ratingList==null) return 0.0;
        double total = 0.0d;
        for(int x = 0; x < ratingList.size(); x++)
        {
            total += ratingList.get(x).getScore();
        }
        return total/ratingList.size();
    }



}
