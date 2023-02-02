package com.revature.services;


import com.revature.dtos.RatingDTO;
import com.revature.models.Employee;
import com.revature.models.Rating;
import com.revature.models.Tag;
import com.revature.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;
    private EmployeeService employeeService;
    private TagService tagService;


    @Autowired
    public RatingService(RatingRepository ratingRepository, EmployeeService employeeService, TagService tagService)
    {
        this.ratingRepository = ratingRepository;
        this.employeeService = employeeService;
        this.tagService = tagService;
    }

    public Rating createRating(RatingDTO rDTO)
    {
        Employee emp = employeeService.getEmployeeById(rDTO.getEmployeeId());
        Tag tag1 = tagService.findById(rDTO.getTags1());
        Tag tag2 = tagService.findById(rDTO.getTags2());
        Tag tag3 = tagService.findById(rDTO.getTags3());

        Rating newRating = new Rating(emp, rDTO.getScore(), tag1, tag2, tag3);
        return ratingRepository.save(newRating);
    }
    public List<Employee> searchEmployeesByTag(int tagId) {
        Tag tag= tagService.findById(tagId);
        List<Employee> employees = ratingRepository.findByTag1OrTag2OrTag3(tag, tag, tag).orElse(null);
        if(employees==null)return null;
        /*
        created a map with employee as the key and num of time the emp appears in the list as the value to have a SET amount
        of employees and to use the value to order them.
         */
        Map<Employee, Integer> employeeCount = new HashMap<>();
        for (Employee employee : employees) {
            int count = employeeCount.getOrDefault(employee, 0);
            employeeCount.put(employee, count + 1);
        }
        //Maps are in the utils not iterable
        List<Map.Entry<Employee, Integer>> entries = new ArrayList<>(employeeCount.entrySet());
        entries.sort(Map.Entry.comparingByValue(Comparator.reverseOrder()));
        return entries.stream().map(Map.Entry::getKey).collect(Collectors.toList());
    }

    public double getEmployeeAvgRating(int employeeId)
    {
        Employee employee = employeeService.getEmployeeById(employeeId);
        List<Rating> ratingList = ratingRepository.findByEmployee(employee).orElse(null);
        if(ratingList==null)return 0.0d;
        double total = 0;
        for(int x = 0; x < ratingList.size(); x++)
        {
            total += ratingList.get(x).getScore();
        }
        return total / ratingList.size();
    }

    public List<Tag> getTop3TagsByEmployee(int employeeId) {
        Employee employee= employeeService.getEmployeeById(employeeId);
        List<Rating> ratings = ratingRepository.findByEmployee(employee).orElse(null);
        if(ratings==null) return null;

        Map<Tag, Integer> tagCountMap = new HashMap<>();

        for (Rating rating : ratings) {
            Tag tag1 = rating.getTag1();
            if (tag1 != null) {
                tagCountMap.put(tag1, tagCountMap.getOrDefault(tag1, 0) + 1);
            }
            Tag tag2 = rating.getTag2();
            if (tag2 != null) {
                tagCountMap.put(tag2, tagCountMap.getOrDefault(tag2, 0) + 1);
            }
            Tag tag3 = rating.getTag3();
            if (tag3 != null) {
                tagCountMap.put(tag3, tagCountMap.getOrDefault(tag3, 0) + 1);
            }
        }

        List<Tag> sortedTags = tagCountMap.entrySet().stream()
                .sorted((e1, e2) -> e2.getValue().compareTo(e1.getValue()))
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        return sortedTags.size() > 3 ? sortedTags.subList(0, 3) : sortedTags;

    }




}
