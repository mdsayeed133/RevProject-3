package com.revature.controllers;

import com.revature.dtos.LikesDTO;
import com.revature.models.Like;
import com.revature.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Like likePost(@RequestBody LikesDTO lDTO){
        return likeService.likePost(lDTO);
    }

    @GetMapping("/{postId}/amount")
    public int likesAmount(@PathVariable int postId){
        return likeService.likesAmount(postId);
    }
}
