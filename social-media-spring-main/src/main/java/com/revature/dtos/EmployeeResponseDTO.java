package com.revature.dtos;

import com.revature.models.Department;
import com.revature.models.User;

import javax.persistence.*;
import java.time.Instant;

public class EmployeeResponseDTO {

    private int id;
    private String firstName;
    private String lastName;
    private User author;
    private Department department;
    private Instant createdDate;

    public EmployeeResponseDTO(int id, String firstName, String lastName, User author, Department department, Instant createdDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.author = author;
        this.department = department;
        this.createdDate = createdDate;
    }

    public EmployeeResponseDTO()
    {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }
}
