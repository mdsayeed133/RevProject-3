package com.revature.services;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.revature.dtos.CommentPostRequest;
import com.revature.dtos.RatingPostRequest;
import com.revature.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.repositories.PostRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostService {

	private PostRepository postRepository;
	private UserService userService;

	private RatingService ratingService;

	private EmployeeService employeeService;
	@Autowired
	public PostService(PostRepository postRepository, UserService userService, RatingService ratingService, EmployeeService employeeService) {
		this.postRepository = postRepository;
		this.userService = userService;
		this.ratingService = ratingService;
		this.employeeService = employeeService;
	}

	public Post getPostById(int postId)
	{
		return postRepository.findById(postId).orElse(null);
	}

	public List<Post> getAll() {
		return this.postRepository.findAll();
	}


	public Post createRatingPost(RatingPostRequest ratingPostRequest){
		User user = userService.getUserById(ratingPostRequest.getUserId()).orElse(null);
		Rating rating = ratingService.createRating(ratingPostRequest.getRatingDTO());
		Post newRatingPost = new Post(ratingPostRequest.getText(), ratingPostRequest.getImageId(), null, user, PostType.Rating, rating, Instant.now());
		return postRepository.save(newRatingPost);
	}


	public Post createCommentPost(CommentPostRequest commentPostRequest){
		User user = userService.getUserById(commentPostRequest.getUserId()).orElse(null);
		Post newCommentPost = new Post(commentPostRequest.getText(), commentPostRequest.getImageId(), null, user, PostType.Comment, Instant.now());
		Post ratingPost = postRepository.findById(commentPostRequest.getPostId()).orElse(null);
		ArrayList<Post> currentComments = new ArrayList<>(ratingPost.getComments());
		currentComments.add(newCommentPost);
		ratingPost.setComments(currentComments);
		//TODO: test in postman for double comments
		postRepository.save(ratingPost);
		return postRepository.save(newCommentPost);
	}

	public Post createReplyPost(CommentPostRequest replyPostRequest){
		User user = userService.getUserById(replyPostRequest.getUserId()).orElse(null);
		Post newReplyPost = new Post(replyPostRequest.getText(), replyPostRequest.getImageId(), null, user, PostType.Reply, Instant.now());
		Post commentPost = postRepository.findById(replyPostRequest.getPostId()).orElse(null);
		ArrayList<Post> currentReply = new ArrayList<>(commentPost.getComments());
		currentReply.add(newReplyPost);
		commentPost.setComments(currentReply);
		//TODO: test in postman for double reply
		postRepository.save(commentPost);
		return postRepository.save(newReplyPost);
	}

	public List<Post> getPostsOfUser(int id){
		User user = userService.getUserById(id).orElse(null);
		return postRepository.findByAuthor(user);
	}

	public List<Post> getPostsAboutEmployee(int employeeId){
		Employee emp = employeeService.getEmployeeById(employeeId);
		List<Post> posts = new ArrayList<>();
		List<Rating> ratings = ratingService.findByEmployee(emp);
		for (Rating rating : ratings) {
			Post post = postRepository.findByRating(rating).orElse(null);
			posts.add(post);
		}
		posts.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return posts;
	}
	//this is the method to getPostByUserFollower
	public List<Post> getUserFeed(int userId) {
		List<Employee> employees= userService.getAllFollowing(userId);
		List<Post> posts = new ArrayList<>();
		for (Employee employee : employees) {
			List<Rating> ratings = ratingService.findByEmployee(employee);
			for (Rating rating : ratings) {
				Post post = postRepository.findByRating(rating).orElse(null);
				posts.add(post);
			}
		}
		posts.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return posts;
	}


	public List<Post> getCommentsOfAPost(int postId){
		Post post = getPostById(postId);
		return post.getComments();
	}

	public List<Post> getRepliesOfComment(int CommentId){
		Post post = getPostById(CommentId);
		return post.getComments();
	}

	public Boolean editRatingPost(RatingPostRequest ratingsPostRequest, int postId){
		try {
			Post post = postRepository.findById(postId).orElse(null);
			Rating rating = post.getRating();
			post.setMessage(ratingsPostRequest.getText());
			post.setImageId(ratingsPostRequest.getImageId());
			ratingService.editRating(ratingsPostRequest.getRatingDTO(), rating.getId());
			postRepository.save(post);
			return true;
		}catch (Exception e){
			return  false;
		}
	}

	public Boolean editCommentPost(CommentPostRequest commentPostRequest, int commentId){
		try {
			Post post = postRepository.findById(commentId).orElse(null);
			post.setMessage(commentPostRequest.getText());
			post.setImageId(commentPostRequest.getImageId());
			postRepository.save(post);
			return true;
		} catch (Exception e){
			return false;
		}
	}

	public Boolean editRelyPost(CommentPostRequest commentPostRequest, int replyId){
		try {
			Post post = postRepository.findById(replyId).orElse(null);
			post.setMessage(commentPostRequest.getText());
			post.setImageId(commentPostRequest.getImageId());
			postRepository.save(post);
			return true;
		} catch (Exception e){
			return false;
		}
	}

}
