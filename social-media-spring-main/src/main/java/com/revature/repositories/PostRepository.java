package com.revature.repositories;

import com.revature.models.Employee;
import com.revature.models.PostType;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Post;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{

    List<Post> findAllByPostType(PostType postType);

    List<Post> getPostsOfUser(User user);

    List<Post> getPostsAboutEmployee(Employee employee);

}
