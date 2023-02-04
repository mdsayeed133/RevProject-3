package com.revature.repositories;

import com.revature.models.*;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{

    List<Post> findAllByPostType(PostType postType);

    Optional<List<Post>> findByAuthor(User user);

    List<Post> findByPostType(PostType post);


    Optional<Post> findByRating(Rating rating);

    //Post findById(int id);

}
