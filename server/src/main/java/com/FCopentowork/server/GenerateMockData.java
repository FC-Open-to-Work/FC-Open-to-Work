package com.FCopentowork.server;

import com.FCopentowork.server.model.auth.User;
import com.FCopentowork.server.model.layout.LayoutDevice;
import com.FCopentowork.server.model.layout.LayoutDeviceType;
import com.FCopentowork.server.model.layout.LayoutObject;
import com.FCopentowork.server.model.layout.LayoutObjectType;
import com.FCopentowork.server.repository.LayoutDeviceRepository;
import com.FCopentowork.server.repository.LayoutObjectRepository;
import com.FCopentowork.server.repository.UserRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GenerateMockData {
    private final UserRepository users;
    private final LayoutObjectRepository layoutObjects;
    private final LayoutDeviceRepository layoutDevices;
    private final PasswordEncoder encoder;

    public GenerateMockData(UserRepository users,
                            LayoutObjectRepository layoutObjects,
                            LayoutDeviceRepository layoutDevices,
                            PasswordEncoder encoder) {
        this.users = users;
        this.layoutObjects = layoutObjects;
        this.layoutDevices = layoutDevices;
        this.encoder = encoder;
    }

    public void generateMockData() throws JSONException {
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
        walls.setProperties(getWallsProperties().toString());
        layoutObjects.save(walls);

        // Setup beds for admin
        LayoutObject beds = new LayoutObject();
        beds.setUserId(n.getId());
        beds.setType(LayoutObjectType.BED);
        beds.setProperties(getBedsProperties().toString());
        layoutObjects.save(beds);

        // Setup lights for admin
        LayoutDevice light1 = new LayoutDevice();
        light1.setUserId(n.getId());
        light1.setType(LayoutDeviceType.LIGHT);
        light1.setProperties(getLight1Properties().toString());
        light1.setOn(false);
        light1.setValue(-1);
        layoutDevices.save(light1);

        LayoutDevice light2 = new LayoutDevice();
        light2.setUserId(n.getId());
        light2.setType(LayoutDeviceType.LIGHT);
        light2.setProperties(getLight2Properties().toString());
        light2.setOn(true);
        light2.setValue(-1);
        layoutDevices.save(light2);

        LayoutDevice light3 = new LayoutDevice();
        light3.setUserId(n.getId());
        light3.setType(LayoutDeviceType.LIGHT);
        light3.setProperties(getLight3Properties().toString());
        light3.setOn(false);
        light3.setValue(-1);
        layoutDevices.save(light3);
    }
    
    private JSONArray getWallsProperties() {
        List<Integer[]> wallsProperties = List.of(
                new Integer[]{100, 100, 700, 100}, // top
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

        return new JSONArray(wallsProperties);
    }

    private JSONArray getBedsProperties() throws JSONException {
        List<JSONObject> bedsProperties = new ArrayList<>();
        JSONObject bed1 = new JSONObject();
        JSONObject bed2 = new JSONObject();

        bed1.put("locX", 104);
        bed1.put("locY", 170);
        bed1.put("size", 3);
        bed1.put("orientation", 270);
        bed2.put("locX", 547);
        bed2.put("locY", 160);
        bed2.put("size", 1);
        bed2.put("orientation", 90);
        bedsProperties.add(bed1);
        bedsProperties.add(bed2);

        return new JSONArray(bedsProperties);
    }

    private JSONObject getLight1Properties() throws JSONException {
        JSONObject lightProperties = new JSONObject();
        lightProperties.put("name", "bedroom light");
        lightProperties.put("locX", 125);
        lightProperties.put("locY", 325);

        return lightProperties;
    }

    private JSONObject getLight2Properties() throws JSONException {
        JSONObject lightProperties = new JSONObject();
        lightProperties.put("name", "living room light");
        lightProperties.put("locX", 500);
        lightProperties.put("locY", 475);

        return lightProperties;
    }

    private JSONObject getLight3Properties() throws JSONException {
        JSONObject lightProperties = new JSONObject();
        lightProperties.put("name", "bedroom light 2");
        lightProperties.put("locX", 680);
        lightProperties.put("locY", 135);

        return lightProperties;
    }
}
