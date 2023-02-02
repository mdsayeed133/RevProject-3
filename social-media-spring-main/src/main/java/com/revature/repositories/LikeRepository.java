package com.revature.repositories;

import com.revature.models.Like;
import com.revature.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer> {

    int countByPost(Post post);

}
