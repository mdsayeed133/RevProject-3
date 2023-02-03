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
		Post ratingPost = postRepository.findById(commentPostRequest.getPostId()).orElse(null);
		List<Post> temp = ratingPost.getComments();
		temp.add(newCommentPost);
		postRepository.save(newCommentPost);
		return postRepository.save(newCommentPost);
	}

	public Post createReplyPost(CommentPostRequest replyPostRequest){
		User user = userService.getUserById(replyPostRequest.getUserId()).orElse(null);
		Post newReplyPost = new Post(replyPostRequest.getPostId(), replyPostRequest.getText(), replyPostRequest.getImageId(), null, user, PostType.Reply, Instant.now());
		Post commentPost = postRepository.findById(replyPostRequest.getPostId()).orElse(null);
		List<Post> temp = commentPost.getComments();
		temp.add(newReplyPost);
		postRepository.save(newReplyPost);
		return postRepository.save(newReplyPost);
	}

	public List<Post> getPostsOfUser(int id){
		User user = userService.getUserById(id).orElse(null);
		return postRepository.findByUser(user);
	}

	public List<Post> getPostsAboutEmployee(int id){
		Employee emp = employeeService.getEmployeeById(id);
		return postRepository.findByEmployee(emp);
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

	public List<Post> getPostByFollower(int id){
		List<Employee> employees = userService.getAllFollowing(id);
		List<Post> followed = new ArrayList<>();
		for (Employee employee : employees){
			List<Post> posts = postRepository.findByEmployee(employee);
			followed.addAll(posts);
		}
		followed.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return followed;
	}

	public List<Post> getCommentsOfAPost(int id){
		Post post = getPostById(id);
		return post.getComments();
	}

	public List<Post> getRepliesOfComment(int id){
		Post post = getPostById(id);
		return post.getComments();
	}

	public Boolean editRatingPost(RatingPostRequest ratingsPostRequest, Rating rating){
		Post post = postRepository.findById(ratingsPostRequest.getUserId()).orElse(null);
		post.setMessage(ratingsPostRequest.getText());
		post.setRating(rating);
		post.setImageId(ratingsPostRequest.getImageId());
		postRepository.save(post);
		return true;
	}

	public Boolean editCommentPost(CommentPostRequest commentPostRequest){
		Post post = postRepository.findById(commentPostRequest.getUserId()).orElse(null);
		post.setMessage(commentPostRequest.getText());
		post.setImageId(commentPostRequest.getImageId());
		postRepository.save(post);
		return true;
	}

}
