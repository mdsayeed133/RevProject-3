package com.revature.services;

import com.revature.models.Department;
import com.revature.models.Employee;
import com.revature.models.Tags;
import com.revature.models.User;
import com.revature.repositories.EmployeeRepository;
import com.revature.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;
    private UserRepository userRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee getEmployeeById(int empId)
    {
        return employeeRepository.findById(empId).orElse(null);
    }

    public List<Employee> getAllEmployees(){
        List<Employee> emp = employeeRepository.findAll();
        return emp;
    }

    public Employee createEmployee(int userId, Employee empRepo){
        User user = userRepository.findById(userId).orElse(null);
        Employee newEmployee = new Employee(empRepo.getFirstName(), empRepo.getLastName(), user, empRepo.getDepartment());
        return newEmployee;
    }

    public List<Employee> getEmployeeByDepartment(Department department){
        List<Employee> emp = employeeRepository.findByDepartment(department);
        return emp;
    }

    public List<Employee> getEmployeeByName(String search){
        List<Employee> allResults= new ArrayList<>();
        List<Employee> firstResults = employeeRepository.findByFirstNameContainingIgnoreCase(search).orElse(null);
        List<Employee> lastResults = employeeRepository.findByLastNameContainingIgnoreCase(search).orElse(null);
        if (firstResults!=null)allResults.addAll(firstResults);
        if(lastResults!=null)allResults.addAll(lastResults);
        return allResults;
    }

}
