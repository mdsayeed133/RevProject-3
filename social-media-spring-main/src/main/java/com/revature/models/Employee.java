package com.revature.models;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "author")
    private User author;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "departmentId")
    private Department department;

    @Column(name = "date", updatable = false, insertable = false)
    private Timestamp date;

    public Employee() {
        this.date = new Timestamp(System.currentTimeMillis());
    }

    // getters and setters
}

