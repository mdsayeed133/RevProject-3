package com.revature.controllers;

import com.revature.dtos.RatingDTO;
import com.revature.models.Employee;
import com.revature.models.Rating;
import com.revature.models.Tag;
import com.revature.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating/post")
@CrossOrigin
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @PostMapping
    public ResponseEntity<Rating> createRating(@RequestBody RatingDTO rDTO) {
        Rating newRating = ratingService.createRating(rDTO);
        return new ResponseEntity<>(newRating, HttpStatus.CREATED);
    }

    @GetMapping("/employees/{tagId}/tagSearch")
    public ResponseEntity<List<Employee>> searchEmployeesByTag(@PathVariable int tagId) {
        List<Employee> employees = ratingService.searchEmployeesByTag(tagId);
        if (employees == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/employee/{employeeId}/average")
    public ResponseEntity<Double> getEmployeeAvgRating(@PathVariable int employeeId) {
        Double avgRating = ratingService.getEmployeeAvgRating(employeeId);
        return new ResponseEntity<>(avgRating, HttpStatus.OK);
    }

    @GetMapping("/employee/{employeeId}/top3tags")
    public ResponseEntity<List<Tag>> getTop3TagsOfEmployee(@PathVariable int employeeId) {
        List<Tag> top3Tags = ratingService.getTop3TagsOfEmployee(employeeId);
        if (top3Tags == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(top3Tags, HttpStatus.OK);
    }

    @GetMapping("/top3employees")
    public ResponseEntity<List<Employee>> getTop3Employees() {
        List<Employee> top3Employees = ratingService.getTop3Employees();
        return new ResponseEntity<>(top3Employees, HttpStatus.OK);
    }
}

