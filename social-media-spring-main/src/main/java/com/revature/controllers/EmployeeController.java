package com.revature.controllers;

import com.revature.dtos.AddEmployeeRequest;
import com.revature.dtos.EmployeeResponseDTO;
import com.revature.dtos.UserResponseDTO;
import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public ResponseEntity<EmployeeResponseDTO> getEmployeeById(@PathVariable int id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee == null){
            return ResponseEntity.notFound().build();
        }
        UserResponseDTO userResponseDTO= new UserResponseDTO(employee.getAuthor().getId(),employee.getAuthor().getEmail(),employee.getAuthor().getPassword(),employee.getAuthor().getFirstName(),employee.getAuthor().getLastName(),employee.getAuthor().getCreatedDate());
        EmployeeResponseDTO eDTO = new EmployeeResponseDTO(employee.getId(), employee.getFirstName(), employee.getLastName(), userResponseDTO, employee.getDepartment(), employee.getCreatedDate());

        return ResponseEntity.ok(eDTO);
    }

    @GetMapping()
    public ResponseEntity<List<EmployeeResponseDTO>> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        if(employees.isEmpty()){return ResponseEntity.noContent().build();}

        List<EmployeeResponseDTO> responseDTOS = new ArrayList<>();
        for(Employee employee:employees){
            UserResponseDTO userResponseDTO= new UserResponseDTO(employee.getAuthor().getId(),employee.getAuthor().getEmail(),employee.getAuthor().getPassword(),employee.getAuthor().getFirstName(),employee.getAuthor().getLastName(),employee.getAuthor().getCreatedDate());
            EmployeeResponseDTO dto= new EmployeeResponseDTO(employee.getId(),employee.getFirstName(),employee.getLastName(),userResponseDTO,employee.getDepartment(),employee.getCreatedDate());
            responseDTOS.add(dto);
        }
        return ResponseEntity.ok(responseDTOS);
    }

    @PostMapping()
    public ResponseEntity<EmployeeResponseDTO> createEmployee(@RequestBody AddEmployeeRequest addEmployeeRequest) {
        try {
            Employee employee = employeeService.createEmployee(addEmployeeRequest);
            UserResponseDTO userResponseDTO= new UserResponseDTO(employee.getAuthor().getId(),employee.getAuthor().getEmail(),employee.getAuthor().getPassword(),employee.getAuthor().getFirstName(),employee.getAuthor().getLastName(),employee.getAuthor().getCreatedDate());
            EmployeeResponseDTO dto= new EmployeeResponseDTO(employee.getId(),employee.getFirstName(),employee.getLastName(),userResponseDTO,employee.getDepartment(),employee.getCreatedDate());
            return ResponseEntity.ok(dto);
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/{departmentId}/department")
    public ResponseEntity<List<EmployeeResponseDTO>> getEmployeeByDepartment(@PathVariable int departmentId){
        List<Employee> employees = employeeService.getEmployeeByDepartment(departmentId);
        if(employees == null){
            return ResponseEntity.notFound().build();
        }
        List<EmployeeResponseDTO> responseDTOS = new ArrayList<>();
        for(Employee employee:employees){
            UserResponseDTO userResponseDTO= new UserResponseDTO(employee.getAuthor().getId(),employee.getAuthor().getEmail(),employee.getAuthor().getPassword(),employee.getAuthor().getFirstName(),employee.getAuthor().getLastName(),employee.getAuthor().getCreatedDate());
            EmployeeResponseDTO dto= new EmployeeResponseDTO(employee.getId(),employee.getFirstName(),employee.getLastName(),userResponseDTO,employee.getDepartment(),employee.getCreatedDate());
            responseDTOS.add(dto);
        }
        return ResponseEntity.ok(responseDTOS);
    }

    @GetMapping("/{search}/search")
    public ResponseEntity<List<EmployeeResponseDTO>> getEmployeeByName(@PathVariable String search){
        List<Employee> employees = employeeService.getEmployeeByName(search);
        if(employees.isEmpty()){return ResponseEntity.noContent().build();}
        List<EmployeeResponseDTO> responseDTOS = new ArrayList<>();
        for(Employee employee:employees){
            UserResponseDTO userResponseDTO= new UserResponseDTO(employee.getAuthor().getId(),employee.getAuthor().getEmail(),employee.getAuthor().getPassword(),employee.getAuthor().getFirstName(),employee.getAuthor().getLastName(),employee.getAuthor().getCreatedDate());
            EmployeeResponseDTO dto= new EmployeeResponseDTO(employee.getId(),employee.getFirstName(),employee.getLastName(),userResponseDTO,employee.getDepartment(),employee.getCreatedDate());
            responseDTOS.add(dto);
        }
        return ResponseEntity.ok(responseDTOS);
    }



}