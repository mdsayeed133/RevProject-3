package com.revature.controllers;

import com.revature.dtos.LikesDTO;
import com.revature.models.Like;
import com.revature.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
            Like Like = likeService.likePost(lDTO);
            return new ResponseEntity<>(Like, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{postId}/amount")
    public ResponseEntity<Integer> likesAmount(@PathVariable int postId){
        int likes= likeService.likesAmount(postId);
        return new ResponseEntity<>(likes, HttpStatus.ACCEPTED);
    }
}
