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
}
