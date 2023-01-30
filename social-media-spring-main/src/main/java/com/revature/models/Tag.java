package com.revature.models;

import javax.persistence.*;

@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "rating")
    private Rating rating;

    @Column(nullable = false)
    private String tagName ;

    public Tag(){};

    public Tag(int id, String tagName){
        this.id = id;
        this.tagName = tagName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    @Override
    public String toString() {
        return "Tags{" +
                "id=" + id +
                ", rating=" + rating +
                ", tagName='" + tagName + '\'' +
                '}';
    }
}
