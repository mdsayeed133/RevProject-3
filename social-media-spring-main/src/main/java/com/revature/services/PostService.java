package com.revature.services;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.revature.dtos.CommentPostRequest;
import com.revature.dtos.RatingDTO;
import com.revature.dtos.RatingPostRequest;
import com.revature.models.*;
import com.revature.repositories.RatingRepository;
import org.springframework.stereotype.Service;

import com.revature.repositories.PostRepository;

@Service
public class PostService {

	private PostRepository postRepository;
	private UserService userService;

	private RatingRepository ratingRepository;

	private EmployeeService employeeService;

	public PostService(PostRepository postRepository, UserService userService) {
		this.postRepository = postRepository;
		this.userService = userService;
	}

	public Post getPostById(int postId)
	{
		return postRepository.findById(postId).orElse(null);
	}

	public List<Post> getAll() {
		return this.postRepository.findAll();
	}

	public Post upsert(Post post) {
		return this.postRepository.save(post);
	}

	public List<Post> getAllRating() {
		return postRepository.findAllByPostType(PostType.Rating);
	}

	public Post createRatingPost(RatingPostRequest ratingPostRequest, Rating rating){
		User user = userService.getUserById(ratingPostRequest.getUserId()).orElse(null);
		Post newRatingPost = new Post(ratingPostRequest.getText(), ratingPostRequest.getImageId(), null, user, PostType.Rating, rating, Instant.now());
		return postRepository.save(newRatingPost);
	}
/*
	public List<Post> getComments(){
		return postRepository.getAllComments(PostType.Comment);
	}

 */

	public Post createCommentPost(CommentPostRequest commentPostRequest){
		User user = userService.getUserById(commentPostRequest.getUserId()).orElse(null);
		Post newCommentPost = new Post(commentPostRequest.getPostId(), commentPostRequest.getText(), commentPostRequest.getImageId(), null, user, PostType.Comment, Instant.now());
		return postRepository.save(newCommentPost);
	}

	public Post createReplyPost(CommentPostRequest replyPostRequest){
		User user = userService.getUserById(replyPostRequest.getUserId()).orElse(null);
		Post newReplyPost = new Post(replyPostRequest.getPostId(), replyPostRequest.getText(), replyPostRequest.getImageId(), null, user, PostType.Reply, Instant.now());
		return postRepository.save(newReplyPost);
	}

	public List<Post> getPostsOfUser(int id){
		User user = userService.getUserById(id).orElse(null);
		List<Post> posts = postRepository.getPostsOfUser(user);
		return posts;
	}

	public List<Post> getPostsAboutEmployee(int id){
		Employee emp = employeeService.getEmployeeById(id);
		List<Post> posts = postRepository.getPostsAboutEmployee(emp);
		return posts;
	}

	public List<Post> getUserFeed(int userId) {
		List<Employee> employees= userService.getAllFollowing(userId);
		List<Post> posts = new ArrayList<>();
		for (Employee employee : employees) {
			List<Rating> ratings = ratingRepository.findByEmployee(employee).orElse(null);
			for (Rating rating : ratings) {
				Post post = postRepository.findByRating(rating).orElse(null);
				posts.add(post);
			}
		}
		posts.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return posts;
	}


}
