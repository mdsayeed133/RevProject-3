package com.revature.repositories;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmailAndPassword(String email, String password);
    @Query("FROM User u WHERE u.first_name LIKE %:first_name%")
    List<User> findByFirstNameStartsWith(@Param("first_name")String search);

    @Query("FROM User u WHERE u.last_name LIKE %:last_name%")
    List<User> findByLastNameStartsWith(@Param("last_name")String search);




}
