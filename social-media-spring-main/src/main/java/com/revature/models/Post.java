package com.revature.models;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "posts")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(columnDefinition = "TEXT")
	private String message;
	private int imageId;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Post> comments;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private User author;

	private PostType postType;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "rating_id")
	private Rating rating;

	@CreatedDate
	private Instant CreatedDate;

	public Post() {
	}

	public Post(String message, int imageId, List<Post> comments, User author, PostType postType, Rating rating, Instant CreatedDate) {
		this.message = message;
		this.imageId = imageId;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
		this.rating = rating;
		this.CreatedDate = CreatedDate;
	}

	public Post(int id, String message, int imageId, List<Post> comments, User author, PostType postType, Rating rating, Instant CreatedDate) {
		this.id = id;
		this.message = message;
		this.imageId = imageId;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
		this.rating = rating;
		this.CreatedDate = CreatedDate;
	}

	public Post(String message, List<Post> comments, User author, PostType postType) {
		this.message = message;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
	}

	public Post(String message, int imageId, List<Post> comments, User author, PostType postType, Rating rating) {
		this.message = message;
		this.imageId = imageId;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
		this.rating = rating;
	}

	public Post(int id, String message) {
		this.id = id;
		this.message = message;
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

	public List<Post> getComments() {
		return comments;
	}

	public void setComments(List<Post> comments) {
		this.comments = comments;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
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
}
