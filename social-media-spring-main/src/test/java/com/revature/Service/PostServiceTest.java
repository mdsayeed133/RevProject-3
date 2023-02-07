package com.revature.Service;

import com.revature.dtos.RatingDTO;
import com.revature.dtos.RatingPostRequest;
import com.revature.models.*;
import com.revature.repositories.PostRepository;
import com.revature.services.*;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@ExtendWith(MockitoExtension.class) //JUnit5
public class PostServiceTest {

    @Mock
    private PostRepository postRepository;
    @Mock
    private UserService userService;
    @Mock
    private RatingService ratingService;
    @Mock
    private EmployeeService employeeService;
    @Mock
    private ProfanityService profanityService;

    @InjectMocks
    private PostService postService;

    private Post fakePost;
    private RatingPostRequest ratingPostRequest;
    private Department fakeDepartment;
    private Tag fakeTag;
    private User fakeUser;
    private Employee fakeEmployee;
    private Rating fakeRating;
    private RatingDTO rDTO;

    @BeforeEach
    public void setup() {
        fakeDepartment= new Department("N/A");
        fakeTag= new Tag("N/A");
        fakeUser = new User("fake@email.com","fake","N/A","N/A");
        fakeEmployee= new Employee("N/A", "N/A", fakeUser,fakeDepartment, Instant.now());
        fakeRating= new Rating(fakeEmployee,0,fakeTag,fakeTag,fakeTag);
        rDTO = new RatingDTO(1,2,3,4,5);
        ratingPostRequest = new RatingPostRequest(fakeUser.getId(), "some text", 2, rDTO);
        fakePost = new Post("any string", 2, null, fakeUser, PostType.Comment, Instant.now());
    }

    @Test
    public void testCreateRatingPost() {

        when(userService.getUserById(ratingPostRequest.getUserId())).thenReturn(Optional.of(fakeUser));
        when(ratingService.createRating(ratingPostRequest.getRatingDTO())).thenReturn(fakeRating);
        when(profanityService.filterProfanity(ratingPostRequest.getText())).thenReturn("any string");
        when(postRepository.save(any(Post.class))).thenReturn(fakePost);

        Post result = postService.createRatingPost(ratingPostRequest);

        assertThat(fakePost, equalTo(result));
    }
}
