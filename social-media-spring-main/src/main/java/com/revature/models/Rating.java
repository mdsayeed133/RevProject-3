package com.revature.models;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "employee_id")
    private Employee employee;
    private int score;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_1")
    private Tags tags1;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_2")
    private Tags tags2;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_3")
    private Tags tags3;

    public Rating() {
    }

    public Rating(Employee employee, int score, Tags tags1, Tags tags2, Tags tags3) {
        this.employee = employee;
        this.score = score;
        this.tags1 = tags1;
        this.tags2 = tags2;
        this.tags3 = tags3;
    }

    public Rating(int id, Employee employee, int score, Tags tags1, Tags tags2, Tags tags3) {
        this.id = id;
        this.employee = employee;
        this.score = score;
        this.tags1 = tags1;
        this.tags2 = tags2;
        this.tags3 = tags3;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Tags getTags1() {
        return tags1;
    }

    public void setTags1(Tags tags1) {
        this.tags1 = tags1;
    }

    public Tags getTags2() {
        return tags2;
    }

    public void setTags2(Tags tags2) {
        this.tags2 = tags2;
    }

    public Tags getTags3() {
        return tags3;
    }

    public void setTags3(Tags tags3) {
        this.tags3 = tags3;
    }
}
