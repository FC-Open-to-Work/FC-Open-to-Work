package com.FCopentowork.server.controller;

import com.FCopentowork.server.model.LoginRequest;
import com.FCopentowork.server.model.SignupRequest;
import com.FCopentowork.server.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
public class AuthController {

    private final AuthenticationService AuthenticationService;

    public AuthController(AuthenticationService AuthenticationService) {
        this.AuthenticationService = AuthenticationService;
    }

    @PostMapping(value = "/login",
            consumes = "application/json",
            produces = "application/json")
    public Map<String, Object> login(@Valid @RequestBody LoginRequest userLogin) {
        String username = userLogin.username();
        String password = userLogin.password();

        return AuthenticationService.loginService(username, password);
    }

    @PostMapping(value = "/signup",
            consumes = "application/json",
            produces = "application/json")
    public Map<String, Object> signup(@Valid @RequestBody SignupRequest signupRequest)
            throws ResponseStatusException {
        String username = signupRequest.username();
        String email = signupRequest.email();
        String password = signupRequest.password();

        Map<String, Object> response;
        try {
            response = AuthenticationService
                    .signupService(username, email, password);
        } catch (Exception e) {
            // TODO This isn't returning the proper status code
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }

        return response;
    }
}
