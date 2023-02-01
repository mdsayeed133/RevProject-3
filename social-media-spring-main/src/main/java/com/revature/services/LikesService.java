package com.revature.services;

import com.revature.dtos.LikesDTO;
import com.revature.models.Post;
import com.revature.repositories.LikesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikesService {

    private LikesRepository likesRepo;
    private PostService postService;


    @Autowired
    public LikesService(LikesRepository likesRepo) {
        this.likesRepo = likesRepo;
    }

    public void likePost(LikesDTO lDTO)
    {
        Post post = postService.
    }


}
