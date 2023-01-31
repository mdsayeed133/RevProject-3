package com.revature.Service;

import com.revature.models.Department;
import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.repositories.UserRepository;
import com.revature.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User mockUser;
    private Employee mockEmployee;
    private Employee mockEmployee2;
    private Department mockDepartment;
    @BeforeEach
    public void setup(){
        mockDepartment= new Department(1,"trainer");
        mockUser = new User(0, "test@example.com", "password", "John", "Doe", Instant.now());
        mockEmployee = new Employee(0,"Ben","Ten",mockUser,mockDepartment,Instant.now());
        mockEmployee2= new Employee(0, "Ben2","2",mockUser,mockDepartment,Instant.now());
        List<Employee> followedEmployees = Arrays.asList(mockEmployee, mockEmployee2);
        mockUser.setFollowedEmployees(followedEmployees);
    }
    @Test
    void findByCredentialsTest() {
        when(userRepository.findByEmailAndPassword("test@example.com", "password")).thenReturn(Optional.of(mockUser));
        Optional<User> result = userService.findByCredentials("test@example.com", "password");
        assertThat(result.get(), equalTo(mockUser));
    }

    @Test
    void getAllFollowingTest() {
        when(userRepository.findById(0)).thenReturn(Optional.of(mockUser));
        List<Employee> result = userService.getAllFollowing(0);
        assertThat(result, equalTo(mockUser.getFollowedEmployees()));
    }

    @Test
    void getUserByIdTest() {
        when(userRepository.findById(0)).thenReturn(Optional.of(mockUser));
        Optional<User> result = userService.getUserById(0);
        assertThat(result.get(), equalTo(mockUser));
    }

    @Test
    void updatePasswordTest() {
        when(userRepository.findById(0)).thenReturn(Optional.of(mockUser));
        boolean result = userService.updatePassword(0, "newPassword");
        assertThat(result, equalTo(true));
        verify(userRepository, times(1)).save(mockUser);
        assertThat(mockUser.getPassword(), equalTo("newPassword"));
    }

    @Test
    void getUserByName_ShouldReturnMatchedUsers() {
        userRepository.save(mockUser);

        List<User> result = userService.getUserByName("John");

        assertThat(result, notNullValue());
        assertThat(result.size(), is(1));
        assertThat(result, hasItem(mockUser));
    }
}
