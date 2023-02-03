package com.revature.repositories;

import com.revature.models.*;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{

    List<Post> findAllByPostType(PostType postType);

    List<Post> getPostsOfUser(User user);

    List<Post> getPostTypeOfPostType(PostType post, int id);

    List<Post> getPostsAboutEmployee(Employee employee);

    Optional<Post> findByRating(Rating rating);

}
