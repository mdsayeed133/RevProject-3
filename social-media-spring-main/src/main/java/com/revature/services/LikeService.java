package com.revature.services;

import com.revature.dtos.LikesDTO;
import com.revature.models.Like;
import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repositories.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    private LikeRepository likesRepo;
    private PostService postService;
    private UserService userService;


    @Autowired
    public LikeService(LikeRepository likesRepo, PostService postService, UserService userService) {
        this.likesRepo = likesRepo;
        this.postService = postService;
        this.userService = userService;
    }

    public Like likePost(LikesDTO lDTO)
    {
        Post post = postService.getPostById(lDTO.getPostId());
        User user = userService.getUserById(lDTO.getUserId()).orElse(null);

        Like like = new Like(post,user);
        return likesRepo.save(like);
    }

    public int likesAmount(int postId)
    {
        Post searchPost = postService.getPostById(postId);
        return likesRepo.countByPost(searchPost);
    }


}
