package com.revature.dtos;

import com.revature.models.PostType;
import com.revature.models.Rating;

import java.time.Instant;

public class PostResponse {

    private int id;
    private String message;
    private int imageId;
    private UserResponse author;
    private PostType postType;
    private Rating rating;
    private Instant createdDate;

    public PostResponse(int id, String message, int imageId, UserResponse author, PostType postType, Rating rating, Instant createdDate) {
        this.id = id;
        this.message = message;
        this.imageId = imageId;
        this.author = author;
        this.postType = postType;
        this.rating = rating;
        this.createdDate = createdDate;
    }

    public PostResponse() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public UserResponse getAuthor() {
        return author;
    }

    public void setAuthor(UserResponse author) {
        this.author = author;
    }

    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }
}
