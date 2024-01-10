package com.FCopentowork.server;

import com.FCopentowork.server.config.RsaKeyProperties;
import com.FCopentowork.server.model.User;
import com.FCopentowork.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;


@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class ServerApplication {

    private final PasswordEncoder encoder;

    public ServerApplication(PasswordEncoder encoder) {
        this.encoder = encoder;
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository users) {
        return args -> {
            users.deleteAll();
            User n = new User();
            n.setUsername("admin");
            n.setEmail("admin@mail.com");
            n.setPassword("{bcrypt}" + encoder.encode("password"));
            n.setRoles("ROLE_ADMIN");

            users.save(n);
            System.out.println("Admin created");
        };
    }
}
