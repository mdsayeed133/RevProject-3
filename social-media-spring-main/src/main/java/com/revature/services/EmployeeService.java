package com.revature.services;

import com.revature.dtos.AddEmployeeRequest;
import com.revature.models.Department;
import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;
    private UserService userService;

    private DepartmentService departmentService;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, UserService userService, DepartmentService departmentService) {
        this.employeeRepository = employeeRepository;
        this.userService = userService;
        this.departmentService = departmentService;
    }

    public Employee getEmployeeById(int empId)
    {
        return employeeRepository.findById(empId).orElse(null);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee createEmployee(AddEmployeeRequest addEmployeeRequest){
        int userId= addEmployeeRequest.getAuthorId();
        Department department= departmentService.getDepartmentById(addEmployeeRequest.getDepartmentId());
        User user = userService.getUserById(userId).orElse(null);
        Employee newEmployee = new Employee(addEmployeeRequest.getFirstName(), addEmployeeRequest.getLastName(), user,department, Instant.now());
        return employeeRepository.save(newEmployee);
    }

    public List<Employee> getEmployeeByDepartment(Department department){
        return employeeRepository.findByDepartment(department).orElse(null);
    }

    public List<Employee> getEmployeeByName(String search){
        Set<Employee> allResults= new HashSet<>();
        List<Employee> firstResults = employeeRepository.findByFirstNameContainingIgnoreCase(search).orElse(null);
        List<Employee> lastResults = employeeRepository.findByLastNameContainingIgnoreCase(search).orElse(null);
        if (firstResults!=null)allResults.addAll(firstResults);
        if(lastResults!=null)allResults.addAll(lastResults);
        return new ArrayList<>(allResults);
    }

}
