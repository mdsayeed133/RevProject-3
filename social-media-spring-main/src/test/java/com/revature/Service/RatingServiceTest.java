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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.contains;

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
    private Employee mockEmployee2;
    private Employee mockEmployee3;
    private Employee mockEmployee4;
    private Department mockDepartment;
    private Department mockDepartment2;
    private User mockUser;
    private User mockUser2;
    private User mockUser3;
    private User mockUser4;
    private Tag mockTag1;
    private Tag mockTag2;
    private Tag mockTag3;
    private Rating mockRating;
    private Rating mockRating2;
    private Rating mockRating3;
    private Rating mockRating4;

    private List<Employee> mockEmployees;


    private int Score;

    @BeforeEach
    public void setup(){

        mockDepartment = new Department(1, "department name");
        mockDepartment = new Department(2, "fire department");
        mockRating = new Rating(mockEmployee2, 70, mockTag1, mockTag2, mockTag3);
        mockRating = new Rating(mockEmployee3, 80, mockTag1, mockTag2, mockTag3);
        mockRating = new Rating(mockEmployee4, 90, mockTag1, mockTag1, mockTag3);

        mockUser = new User(0, "test@example.com", "password", "John", "Doe", Instant.now());
        mockUser2 = new User(0, "test2@example.com", "password", "John2", "Doe", Instant.now());
        mockUser3 = new User(0, "test3@example.com", "password", "John3", "Doe", Instant.now());
        mockUser4 = new User(0, "test4@example.com", "password", "John4", "Doe", Instant.now());

        mockEmployee = new Employee("Bob", "The builder is cool", mockUser, mockDepartment);
        mockEmployee2 = new Employee("Bob2", "The builder is silly", mockUser2, mockDepartment2);
        mockEmployee3 = new Employee("Bob3", "The builder is fast", mockUser3, mockDepartment2);
        mockEmployee4 = new Employee("Bob4", "The builder is a dork", mockUser4, mockDepartment);


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
        RatingDTO rDTO = new RatingDTO(1,60,1,2,3);
        when(tagService.findById(rDTO.getTags1())).thenReturn(mockTag1);
        when(ratingRepo.findByTag1OrTag2OrTag3(any(), any(), any())).thenReturn(Optional.ofNullable(mockEmployees));

        List<Employee> expected = new ArrayList<>();
        expected.add(mockEmployee4);
        expected.add(mockEmployee2);
        expected.add(mockEmployee);
        expected.add(mockEmployee3);

        List<Employee> result = service.searchEmployeesByTag(mockTag1.getId());

        assertThat(result, contains(mockEmployee4));


    }


}
