package com.revature.services;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.revature.dtos.CommentPostRequest;
import com.revature.dtos.RatingPostRequest;
import com.revature.exceptions.DeadPostException;
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
	private ProfanityService profanityService;
	@Autowired
	public PostService(PostRepository postRepository, UserService userService, RatingService ratingService, EmployeeService employeeService, ProfanityService profanityService) {
		this.postRepository = postRepository;
		this.userService = userService;
		this.ratingService = ratingService;
		this.employeeService = employeeService;
		this.profanityService = profanityService;
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
		String clearText= profanityService.filterProfanity(ratingPostRequest.getText());
		Post newRatingPost = new Post(clearText	, ratingPostRequest.getImageId(), null, user, PostType.Rating, rating, Instant.now());
		return postRepository.save(newRatingPost);
	}


	public Post createCommentPost(CommentPostRequest commentPostRequest) throws DeadPostException{
		User user = userService.getUserById(commentPostRequest.getUserId()).orElse(null);
		String clearText= profanityService.filterProfanity(commentPostRequest.getText());
		Post newCommentPost = new Post(clearText, commentPostRequest.getImageId(), null, user, PostType.Comment, Instant.now());
		Post ratingPost = postRepository.findById(commentPostRequest.getPostId()).orElse(null);
		if(ratingPost==null) throw new DeadPostException();
		ArrayList<Post> currentComments = new ArrayList<>(ratingPost.getComments());
		currentComments.add(newCommentPost);
		ratingPost.setComments(currentComments);
		//TODO: test in postman for double comments
		postRepository.save(ratingPost);
		return postRepository.save(newCommentPost);
	}

	public Post createReplyPost(CommentPostRequest replyPostRequest)throws DeadPostException{
		User user = userService.getUserById(replyPostRequest.getUserId()).orElse(null);
		String clearText= profanityService.filterProfanity(replyPostRequest.getText());
		Post newReplyPost = new Post(clearText, replyPostRequest.getImageId(), null, user, PostType.Reply, Instant.now());
		Post commentPost = postRepository.findById(replyPostRequest.getPostId()).orElse(null);
		if(commentPost==null) throw new DeadPostException();
		ArrayList<Post> currentReply = new ArrayList<>(commentPost.getComments());
		currentReply.add(newReplyPost);
		commentPost.setComments(currentReply);
		//TODO: test in postman for double reply
		postRepository.save(commentPost);
		return postRepository.save(newReplyPost);
	}

	public List<Post> getPostsOfUser(int id){
		User user = userService.getUserById(id).orElse(null);
		List<Post> posts = postRepository.findByAuthor(user).orElse(null);
		//TODO: create a fake post to return
		posts.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return posts;
	}

	public List<Post> getPostsAboutEmployee(int employeeId){
		Employee emp = employeeService.getEmployeeById(employeeId);
		List<Post> posts = new ArrayList<>();
		List<Rating> ratings = ratingService.findByEmployee(emp).orElse(null);
		//TODO: create a fake post to return
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
		//TODO: create a fake post to return
		List<Post> posts = new ArrayList<>();
		for (Employee employee : employees) {
			List<Rating> ratings = ratingService.findByEmployee(employee).orElse(null);
			for (Rating rating : ratings) {
				Post post = postRepository.findByRating(rating).orElse(null);
				posts.add(post);
			}
		}
		posts.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return posts;
	}


	public List<Post> getCommentsOfAPost(int postId) throws DeadPostException{
		Post post = postRepository.findById(postId).orElse(null);
		if (post==null) throw new DeadPostException();
		List<Post> comments= new ArrayList<>(post.getComments());
		comments.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return comments;
	}

	public List<Post> getRepliesOfComment(int commentId) throws DeadPostException{
		Post comment = postRepository.findById(commentId).orElse(null);
		if(comment==null) throw new DeadPostException();
		List<Post> replies = new ArrayList<>(comment.getComments());
		replies.sort(Comparator.comparing(Post::getCreatedDate).reversed());
		return replies;
	}

	public Boolean editRatingPost(RatingPostRequest ratingsPostRequest, int postId){
		try {
			Post post = postRepository.findById(postId).orElse(null);
			if(post==null)throw new DeadPostException();
			Rating rating = post.getRating();
			String clearText= profanityService.filterProfanity(ratingsPostRequest.getText());
			post.setMessage(clearText);
			post.setImageId(ratingsPostRequest.getImageId());
			ratingService.editRating(ratingsPostRequest.getRatingDTO(), rating.getId());
			postRepository.save(post);
			return true;
		}catch (Exception e){
			return  false;
		}
	}

	public Boolean editCommentPost(CommentPostRequest commentPostRequest, int commentId) throws DeadPostException{
		try {
			Post post = postRepository.findById(commentId).orElse(null);
			if(post==null)throw new DeadPostException();
			String clearText= profanityService.filterProfanity(commentPostRequest.getText());
			post.setMessage(clearText);
			post.setImageId(commentPostRequest.getImageId());
			postRepository.save(post);
			return true;
		} catch (Exception e){
			return false;
		}
	}

	public Boolean editRelyPost(CommentPostRequest commentPostRequest, int replyId) throws DeadPostException{
		try {
			Post post = postRepository.findById(replyId).orElse(null);
			if(post==null)throw new DeadPostException();
			String clearText= profanityService.filterProfanity(commentPostRequest.getText());
			post.setMessage(clearText);
			post.setImageId(commentPostRequest.getImageId());
			postRepository.save(post);
			return true;
		} catch (Exception e){
			return false;
		}
	}

}
