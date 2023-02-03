package com.revature.controllers;

import com.revature.dtos.FollowRequest;
import com.revature.dtos.PasswordResetRequest;
import com.revature.models.Employee;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}/id")
    public ResponseEntity<User> getUserById(@PathVariable int id){
        Optional<User> user = userService.getUserById(id);
        if(user.isPresent()) return ResponseEntity.ok(user.get());
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/followed/{userId}/id")
    public ResponseEntity<List<Employee>> getAllFollowing(@PathVariable int userId){
        List<Employee> followedEmployees = userService.getAllFollowing(userId);
        if(followedEmployees != null) return ResponseEntity.ok(followedEmployees);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/updatePassword")
    public ResponseEntity<Object> updatePassword(@RequestBody PasswordResetRequest passwordResetRequest){
        boolean result = userService.updatePassword(passwordResetRequest.getUserId(), passwordResetRequest.getPassword());
        if(result) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{search}/search")
    public ResponseEntity<List<User>> searchUsers(@PathVariable String search){
        List<User> searchResults = userService.getUserByName(search);
        if(searchResults != null) return ResponseEntity.ok(searchResults);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/follow")
    public ResponseEntity<Object> follow(@RequestBody FollowRequest request){
        boolean result = userService.follow(request.getUserId(), request.getEmployeeId());
        if(result) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/unfollow")
    public ResponseEntity<Object> unFollow(@RequestBody FollowRequest request){
        boolean result = userService.unFollow(request.getUserId(), request.getEmployeeId());
        if(result) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}


