package com.revature.controllers;

import com.revature.dtos.LikesDTO;
import com.revature.models.Like;
import com.revature.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/likes")
@CrossOrigin
public class LikeController {

    private LikeService likeService;

    @Autowired
    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping("/like")
    public ResponseEntity<Like> likePost(@RequestBody LikesDTO lDTO){
        try {
            Like like = likeService.likePost(lDTO);
            return ResponseEntity.accepted().body(like);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{postId}/amount")
    public ResponseEntity<Integer> likesAmount(@PathVariable int postId){
        try {
            int likes = likeService.likesAmount(postId);
            return ResponseEntity.accepted().body(likes);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
