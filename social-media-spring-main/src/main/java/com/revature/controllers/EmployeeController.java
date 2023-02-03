package com.revature.controllers;

import com.revature.dtos.AddEmployeeRequest;
import com.revature.models.Department;
import com.revature.models.Employee;
import com.revature.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/{id}/id")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        if(employees.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Employee> createEmployee(@RequestBody AddEmployeeRequest addEmployeeRequest){
        try {
            Employee employee = employeeService.createEmployee(addEmployeeRequest);
            return new ResponseEntity<>(employee, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/{departmentId}/department")
    public ResponseEntity<List<Employee>> getEmployeeByDepartment(@PathVariable int departmentId){
        List<Employee> employees = employeeService.getEmployeeByDepartment(departmentId);
        if(employees == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/{search}/search")
    public ResponseEntity<List<Employee>> getEmployeeByName(@PathVariable String search){
        List<Employee> employees = employeeService.getEmployeeByName(search);
        if(employees.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }



}