package com.revature.repositories;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmailAndPassword(String email, String password);
    @Transactional
    @Query("FROM users u WHERE u.first_name LIKE %:first_name%")
    Optional<List<User>> findByFirstNameStartsWith(@Param("first_name")String search);
    @Transactional
    @Query("FROM users u WHERE u.last_name LIKE %:last_name%")
    Optional<List<User>> findByLastNameStartsWith(@Param("last_name")String search);




}
