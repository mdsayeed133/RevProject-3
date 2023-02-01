package com.revature.services;

import com.revature.dtos.LikesDTO;
import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repositories.LikesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikesService {

    private LikesRepository likesRepo;
    private PostService postService;
    private UserService userService;





    @Autowired
    public LikesService(LikesRepository likesRepo, PostService postService, UserService userService) {
        this.likesRepo = likesRepo;
        this.postService = postService;
        this.userService = userService;
    }

    public boolean likePost(LikesDTO lDTO)
    {
        Post post = postService.getPostById(lDTO.getPostId());
        User user = userService.getUserById(lDTO.getUserId()).orElse(null);

        if(user != null && post != null)
        {
            return true;
        }
        else{
            return false;
        }
    }
/*
    public int likesAmount(int postId)
    {
        Post searchPost = postService.getPostById(postId);
        return likesRepo.countLikes(searchPost);
    }

 */

}
