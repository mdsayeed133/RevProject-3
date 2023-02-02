package com.revature.Service;

import com.revature.models.Employee;
import com.revature.repositories.RatingRepository;
import com.revature.services.EmployeeService;
import com.revature.services.RatingService;
import com.revature.services.TagService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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
    private int Score;
    private
    @BeforeEach
    public void setup(){
        mockEmployee = new Employee(0, )
    }
}
