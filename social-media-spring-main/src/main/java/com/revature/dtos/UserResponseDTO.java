package com.revature.dtos;

import com.revature.models.Employee;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.ManyToMany;
import java.time.Instant;
import java.util.List;

public class UserResponseDTO {

    private int id;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private Instant date;

    public UserResponseDTO(int id, String email, String password, String firstName, String lastName, Instant date) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
    }

    public UserResponseDTO()
    {

    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Instant getDate() {
        return date;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

}
