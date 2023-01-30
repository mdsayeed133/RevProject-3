package com.revature.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Employee trainer;
    private int score;

    @ManyToOne
    private Tag tag1;
    @ManyToOne
    private Tag tag2;
    @ManyToOne
    private Tag tag3;

    public Rating() {
    }

    public Rating(int id, Employee trainer, int score, Tag tag1, Tag tag2, Tag tag3) {
        this.id = id;
        this.trainer = trainer;
        this.score = score;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
    }

    public Rating(Employee trainer, int score, Tag tag1, Tag tag2, Tag tag3) {
        this.trainer = trainer;
        this.score = score;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
    }

    public int getId() {
        return id;
    }

    public Employee getTrainer() {
        return trainer;
    }

    public int getScore() {
        return score;
    }

    public Tag getTag1() {
        return tag1;
    }

    public Tag getTag2() {
        return tag2;
    }

    public Tag getTag3() {
        return tag3;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTrainer(Employee trainer) {
        this.trainer = trainer;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public void setTag1(Tag tag1) {
        this.tag1 = tag1;
    }

    public void setTag2(Tag tag2) {
        this.tag2 = tag2;
    }

    public void setTag3(Tag tag3) {
        this.tag3 = tag3;
    }
}
