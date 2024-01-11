package com.FCopentowork.server;

import com.FCopentowork.server.config.RsaKeyProperties;
import com.FCopentowork.server.repository.LayoutDeviceRepository;
import com.FCopentowork.server.repository.LayoutObjectRepository;
import com.FCopentowork.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;


@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class ServerApplication {
    private final GenerateMockData generateMockData;

    public ServerApplication(GenerateMockData generateMockData) {
        this.generateMockData = generateMockData;
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository users,
                                        LayoutObjectRepository layoutObjects,
                                        LayoutDeviceRepository layoutDevices) {
        return args -> {
            // Setup admin user
            users.deleteAll(); //TODO: Remove this line in production
            layoutObjects.deleteAll(); //TODO: Remove this line in production
            layoutDevices.deleteAll(); //TODO: Remove this line in production

            // Generate mock data
            try {
                generateMockData.generateMockData();
            } catch (Exception e) {
                System.out.println("Error generating mock data" + e);
            }
        };
    }
}
