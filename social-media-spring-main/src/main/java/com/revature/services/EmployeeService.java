package com.revature.services;

import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.repositories.EmployeeRepository;
import com.revature.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


}
