package com.FCopentowork.server.controller;

import com.FCopentowork.server.model.LoginRequest;
import com.FCopentowork.server.model.SignupRequest;
import com.FCopentowork.server.model.User;
import com.FCopentowork.server.repository.UserRepository;
import com.FCopentowork.server.service.TokenService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private static final Logger LOG = LoggerFactory.getLogger(AuthController.class);

    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder encoder;

    public AuthController(TokenService tokenService,
                          UserRepository userRepository,
                          AuthenticationManager authenticationManager,
                          PasswordEncoder encoder) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.encoder = encoder;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest userLogin) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userLogin.username(),
                        userLogin.password()));
        LOG.debug("Login token requested for user: {}", authentication.getName());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Login token granted: {}", token);
        return token;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest signupRequest) {
        String firstName = signupRequest.firstName();
        String lastName = signupRequest.lastName();
        String email = signupRequest.email();
        String password = signupRequest.password();

        LOG.debug("Signup requested for user: {}", email);

        User n = new User();
        n.setFirstName(firstName);
        n.setLastName(lastName);
        n.setEmail(email);
        n.setPassword("{bcrypt}" + encoder.encode(password));
        n.setRoles("ROLE_USER");

        userRepository.save(n);
        LOG.debug("Signup successful for user: {} with role: {}", email, n.getRoles());
        return "Signup successful for user: " + email;
    }
}
