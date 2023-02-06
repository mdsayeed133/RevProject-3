package com.revature.controllers;

import com.revature.dtos.CommentPostRequest;
import com.revature.dtos.PostResponse;
import com.revature.dtos.RatingPostRequest;
import com.revature.exceptions.PostNotFound;
import com.revature.models.Post;
import com.revature.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostController {

    private final PostService postService;
    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/rating")
    public ResponseEntity<PostResponse> createRatingPost(@RequestBody RatingPostRequest ratingPostRequest) {
        try {
            Post post = postService.createRatingPost(ratingPostRequest);
            
            PostResponse postResponse= new PostResponse(p)
            return ResponseEntity.status(HttpStatus.CREATED).body(post);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/comment")
    public ResponseEntity<Post> createCommentPost(@RequestBody CommentPostRequest commentPostRequest) {
        try {
            Post post = postService.createCommentPost(commentPostRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(post);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/reply")
    public ResponseEntity<Post> createReplyPost(@RequestBody CommentPostRequest replyPostRequest) {
        try {
            Post post = postService.createReplyPost(replyPostRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(post);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/user/ratings")
    public ResponseEntity<List<Post>> getRatingPostsOfUser(@PathVariable int id) {
        try {
            List<Post> posts = postService.getRatingPostsOfUser(id);
            return ResponseEntity.ok(posts);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/user/comments")
    public ResponseEntity<List<Post>> getCommentPostsOfUser(@PathVariable int id) {
        try {
            List<Post> posts = postService.getCommentPostsOfUser(id);
            return ResponseEntity.ok(posts);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/user/replies")
    public ResponseEntity<List<Post>> getReplyPostsOfUser(@PathVariable int id) {
        try {
            List<Post> posts = postService.getReplyPostsOfUser(id);
            return ResponseEntity.ok(posts);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/emp/posts")
    public ResponseEntity<List<Post>> getPostsAboutEmployee(@PathVariable int id){
        try{
            List<Post> posts = postService.getPostsAboutEmployee(id);
            return ResponseEntity.ok(posts);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/user/feed")
    public ResponseEntity<List<Post>> getUserFeed(@PathVariable int id){
        try{
            List<Post> posts= postService.getUserFeed(id);
            return ResponseEntity.ok(posts);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping("/{id}/post/comments")
    public ResponseEntity<List<Post>> getCommentsOfAPost(@PathVariable int id){
        try{
            List<Post> comments= postService.getCommentsOfAPost(id);
            return ResponseEntity.ok(comments);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping("/{id}/comment/replies")
    public ResponseEntity<List<Post>> getRepliesOfComment(@PathVariable int id){
        try{
            List<Post> replies= postService.getRepliesOfComment(id);
            return ResponseEntity.ok(replies);
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    @PutMapping("/{id}/post/edit")
    public ResponseEntity<Object> editRatingPost(@RequestBody RatingPostRequest ratingPostRequest, @PathVariable int id){
        try {
            boolean result = postService.editRatingPost(ratingPostRequest, id);
            if(result) return ResponseEntity.ok().build();
            return ResponseEntity.notFound().build();
        } catch (PostNotFound pe) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}/comment/edit")
    public ResponseEntity<Object> editCommentPost(@RequestBody CommentPostRequest commentPostRequest, @PathVariable int id){
        try {
            boolean result = postService.editCommentPost(commentPostRequest, id);
            if(result) return ResponseEntity.ok().build();
            return ResponseEntity.badRequest().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/reply/edit")
    public ResponseEntity<Object> editReplyPost(@RequestBody CommentPostRequest commentPostRequest, @PathVariable int id){
        try {
            boolean result = postService.editRelyPost(commentPostRequest, id);
            if(result) return ResponseEntity.ok().build();
            return ResponseEntity.badRequest().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}/post/delete")
    public ResponseEntity<Object> deletePost(@PathVariable int id){
        try{
            postService.deletePost(id);
            return ResponseEntity.ok().build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}



