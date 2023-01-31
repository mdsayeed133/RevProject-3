package com.revature.services;

import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> findByCredentials(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public List<Employee> getAllFollowing(int userId)
    {
        User user = userRepository.findById(userId).orElse(null);
        return user.getFollowedEmployees();
    }

    public Optional<User> getUserById(int id){
        return userRepository.findById(id);
    }
    public boolean updatePassword(int userId, String newPassword){
        User user = userRepository.findById(userId).orElse(null);
        if(user == null){return false;}
        user.setPassword(newPassword);
        userRepository.save(user);
        return true;

    }

    public List<User> getUserByName(String search){
        List<User> firstResults = userRepository.findByFirstNameStartsWith(search);
        List<User> lastResults = userRepository.findByLastNameStartsWith(search);
        firstResults.addAll(lastResults);
        return firstResults;
    }


    public User save(User user) {
        return userRepository.save(user);
    }


}
