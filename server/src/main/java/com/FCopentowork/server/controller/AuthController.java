package com.FCopentowork.server.controller;

import com.FCopentowork.server.exception.DuplicateUsernameException;
import com.FCopentowork.server.exception.UserDoesNotExistException;
import com.FCopentowork.server.model.LoginRequest;
import com.FCopentowork.server.model.SignupRequest;
import com.FCopentowork.server.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
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
    public ResponseEntity<Map<String, Object>> login(@Valid @RequestBody LoginRequest userLogin) {
        String username = userLogin.username();
        String password = userLogin.password();

        ResponseEntity<Map<String, Object>> responseEntity;
        Map<String, Object> response;
        try {
            response = AuthenticationService
                    .loginService(username, password);
            responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
        } catch (UserDoesNotExistException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (AuthenticationException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
        return responseEntity;
    }

    @PostMapping(value = "/signup",
            consumes = "application/json",
            produces = "application/json")
    public ResponseEntity<Map<String, Object>> signup(@Valid @RequestBody SignupRequest signupRequest)
            throws ResponseStatusException {
        String username = signupRequest.username();
        String email = signupRequest.email();
        String password = signupRequest.password();

        ResponseEntity<Map<String, Object>> responseEntity;
        Map<String, Object> response;
        try {
            response = AuthenticationService
                    .signupService(username, email, password);
            responseEntity = new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (DuplicateUsernameException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }

        return responseEntity;
    }
}
