package com.FCopentowork.server;

import com.FCopentowork.server.config.RsaKeyProperties;
import com.FCopentowork.server.model.auth.User;
import com.FCopentowork.server.model.layout.LayoutObject;
import com.FCopentowork.server.model.layout.LayoutObjectType;
import com.FCopentowork.server.repository.LayoutObjectRepository;
import com.FCopentowork.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONArray;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;


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
    CommandLineRunner commandLineRunner(UserRepository users, LayoutObjectRepository layoutObjects) {
        return args -> {
            // Setup admin user
            users.deleteAll(); //TODO: Remove this line in production
            User n = new User();
            n.setUsername("admin");
            n.setEmail("admin@mail.com");
            n.setPassword("{bcrypt}" + encoder.encode("password"));
            n.setRoles("ROLE_ADMIN");

            users.save(n);
            System.out.println("Admin created");

            // Setup walls for admin
            LayoutObject walls = new LayoutObject();
            walls.setUserId(n.getId());
            walls.setType(LayoutObjectType.WALL);
            walls.setProperties(getJsonArray().toString());
            layoutObjects.save(walls);

            // Setup beds for admin
            LayoutObject bed = new LayoutObject();
            bed.setUserId(n.getId());
            bed.setType(LayoutObjectType.BED);
            bed.setProperties(getBedJsonArray().toString());
            layoutObjects.save(bed);
        };
    }

    private JSONArray getJsonArray() {
        List<Integer[]> wallProperties = List.of(
                new Integer[]{100, 100, 100, 500}, // left
                new Integer[]{100, 500, 550, 500}, // bottom
                new Integer[]{700, 100, 700, 500}, // right
                new Integer[]{675, 500, 700, 500}, // right

                new Integer[]{300, 100, 300, 400}, // bedroom wall long
                new Integer[]{300, 500, 300, 480}, // bedroom wall short

                new Integer[]{500, 100, 500, 125}, // living room wall short
                new Integer[]{500, 250, 500, 275}, // living room wall short
                new Integer[]{500, 275, 700, 275}  // living room wall long
        );
        return new JSONArray(wallProperties);
    }

    private JSONArray getBedJsonArray() throws JSONException {
        List<JSONObject> bedProperties = new ArrayList<>();
        JSONObject bed1 = new JSONObject();
        JSONObject bed2 = new JSONObject();
        /* Refer to
        * bedsArr.push({ locX: 104, locY: 170, size: Sizes.QUEEN, orientation: Orientations.LEFT }); // bed
        bedsArr.push({ locX: 547, locY: 160, size: Sizes.TWIN, orientation: Orientations.RIGHT });
        * */
        bed1.put("locX", 104);
        bed1.put("locY", 170);
        bed1.put("size", 3);
        bed1.put("orientation", 270);
        bed2.put("locX", 547);
        bed2.put("locY", 160);
        bed2.put("size", 1);
        bed2.put("orientation", 90);
        bedProperties.add(bed1);
        bedProperties.add(bed2);
        System.out.println(bedProperties);

        return new JSONArray(bedProperties);
    }
}
