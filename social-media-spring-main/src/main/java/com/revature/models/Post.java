package com.revature.models;

import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "posts")
public class Post {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	private String text;
	private String imageUrl;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Post> comments;
	@ManyToOne
	private User author;

	private PostType postType;

	public Post() {
	}

	public Post(String text, String imageUrl, List<Post> comments, User author, PostType postType) {
		this.text = text;
		this.imageUrl = imageUrl;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
	}

	public Post(int id, String text, String imageUrl, List<Post> comments, User author, PostType postType) {
		this.id = id;
		this.text = text;
		this.imageUrl = imageUrl;
		this.comments = comments;
		this.author = author;
		this.postType = postType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
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
}
