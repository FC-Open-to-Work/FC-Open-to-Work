package com.FCopentowork.server.controller;

import com.FCopentowork.server.repository.UserRepository;
import com.FCopentowork.server.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/api/user")
public class UserController {
  @Autowired
  private UserRepository userRepository;

  @PostMapping(path="")
  public @ResponseBody String addNewUser (@RequestParam String name
      , @RequestParam String email, @RequestParam String password) {
    User n = new User();
    n.setName(name);
    n.setEmail(email);
    n.setPassword(password);
    userRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="")
  public @ResponseBody Iterable<User> getAllUsers() {
    // This returns a JSON or XML with the users
    return userRepository.findAll();
  }
}