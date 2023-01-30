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
	private String text;
	private int imageId;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Post> comments;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private User author;

	private PostType postType;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "rating_id")
	private Rating rating;

	@CreatedDate
	private Instant date;

	public Post() {
	}

	public Post(String text, int imageId, List<Post> comments, User author, PostType postType, Rating rating, Instant date) {
		this.text = text;
		this.imageId = imageId;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
		this.rating = rating;
		this.date = date;
	}

	public Post(int id, String text, int imageId, List<Post> comments, User author, PostType postType, Rating rating, Instant date) {
		this.id = id;
		this.text = text;
		this.imageId = imageId;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
		this.rating = rating;
		this.date = date;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
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
