package com.revature.Service;

import com.revature.models.Like;
import com.revature.models.Post;
import com.revature.models.User;
import com.revature.repositories.LikeRepository;
import com.revature.services.LikeService;
import com.revature.services.PostService;
import com.revature.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
public class LikeServiceTest {
    @Mock
    private PostService postService;
    @Mock
    private LikeRepository likesRepo;
    @Mock
    private UserService userService;
    @InjectMocks
    private LikeService service;

    private User mockUser;
    private User mockUser2;
    private Post mockPost;
    private Like mocklike;
    @BeforeEach
    public void setup(){
        mockUser = new User(0, "test@example.com", "password", "John", "Doe", Instant.now());
        mockUser2 = new User(1, "test@example.com", "password", "John", "Doe", Instant.now());
        mockPost = mock(Post.class);
        mocklike= new Like(mockPost,mockUser);
    }

}
