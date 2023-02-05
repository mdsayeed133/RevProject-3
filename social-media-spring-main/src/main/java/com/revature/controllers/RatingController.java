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
        try {
            Rating newRating = ratingService.createRating(rDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(newRating);
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/employees/{tagId}/tagSearch")
    public ResponseEntity<List<Employee>> searchEmployeesByTag(@PathVariable int tagId) {
        List<Employee> employees = ratingService.searchEmployeesByTag(tagId);
        if (employees == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/employee/{employeeId}/average")
    public ResponseEntity<Double> getEmployeeAvgRating(@PathVariable int employeeId) {
        try {
            Double avgRating = ratingService.getEmployeeAvgRating(employeeId);
            return ResponseEntity.ok(avgRating);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/employee/{employeeId}/top3tags")
    public ResponseEntity<List<Tag>> getTop3TagsOfEmployee(@PathVariable int employeeId) {
        List<Tag> top3Tags = ratingService.getTop3TagsOfEmployee(employeeId);
        if (top3Tags == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(top3Tags);
    }

    @GetMapping("/top3employees")
    public ResponseEntity<List<Employee>> getTop3Employees() {
        try {
            List<Employee> top3Employees = ratingService.getTop3Employees();
            return ResponseEntity.ok(top3Employees);
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}

