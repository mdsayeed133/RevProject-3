package com.revature.services;

import java.util.List;

import com.revature.dtos.AddEmployeeRequest;
import com.revature.dtos.RatingPostRequest;
import com.revature.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.repositories.PostRepository;

@Service
public class PostService {

	private PostRepository postRepository;
	private UserService userService;

	public PostService(PostRepository postRepository) {
		this.postRepository = postRepository;
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

	public Post createRatingPost(RatingPostRequest ratingPostRequest){
		int userId= ratingPostRequest.getUserId();
		User user = userService.getUserById(userId).orElse(null);
		Post newRatingPost = new Post(ratingPostRequest.getText(), ratingPostRequest.getImageId(), null, user, ratingPostRequest.getPostType(), null);
		return postRepository.save(newRatingPost);
	}

	public List<Post> getComments(){
		return postRepository.getAllComments(PostType.Comment);
	}


}
