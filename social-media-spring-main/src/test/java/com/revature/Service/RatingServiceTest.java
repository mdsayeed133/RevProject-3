package com.revature.Service;

import com.revature.dtos.RatingDTO;
import com.revature.models.*;
import com.revature.repositories.RatingRepository;
import com.revature.services.EmployeeService;
import com.revature.services.RatingService;
import com.revature.services.TagService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class RatingServiceTest {

    @Mock
    private EmployeeService employeeService;
    @Mock
    private TagService tagService;
    @Mock
    private RatingRepository ratingRepo;

    @InjectMocks
    private RatingService service;

    private Employee mockEmployee;
    private Department mockDepartment;
    private User mockUser;
    private Tag mockTag1;
    private Tag mockTag2;
    private Tag mockTag3;
    private Rating mockRating;


    private int Score;

    @BeforeEach
    public void setup(){

        mockDepartment = new Department(1, "department name");
        mockUser = new User(0, "test@example.com", "password", "John", "Doe", Instant.now());
        mockEmployee = new Employee("Bob", "The builder is cool", mockUser, mockDepartment);
        mockEmployee2 = new Employee("Bob2", "The builder", mockUser, mockDepartment);
        mockEmployee3 = new Employee("Bob3", "The builder", mockUser, mockDepartment);
        mockEmployee4 = new Employee("Bob4", "The builder", mockUser, mockDepartment);

        mockTag1 = new Tag(1, "Good");
        mockTag2 = new Tag(2, "Bad");
        mockTag1 = new Tag(3, "Average");
        mockRating = new Rating(mockEmployee, 60, mockTag1, mockTag2, mockTag3);


    }

    @Test
    public void createRatingTest()
    {
        RatingDTO rDTO = new RatingDTO(1, 60, 1,2,3);
        when(employeeService.getEmployeeById(rDTO.getEmployeeId())).thenReturn(mockEmployee);
        when(tagService.findById(rDTO.getTags1())).thenReturn(mockTag1);
        when(tagService.findById(rDTO.getTags2())).thenReturn(mockTag2);
        when(tagService.findById(rDTO.getTags3())).thenReturn(mockTag3);
        when(ratingRepo.save(any())).thenReturn(mockRating);

        Rating result = service.createRating(rDTO);

        assertThat(mockRating, equalTo(result));
    }

    @Test
    public void searchEmployeeByTagTest()
    {

    }
}
