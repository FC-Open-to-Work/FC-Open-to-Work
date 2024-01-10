package com.FCopentowork.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.text.MessageFormat;

@RestController
@RequestMapping("/api")
public class AppController {

    @GetMapping("")
    public String home(Principal principal) {
        return MessageFormat.format("Hello, {0}!", principal.getName());
    }
}