package com.FCopentowork.server.service;

import com.FCopentowork.server.exception.UserDoesNotExistException;
import com.FCopentowork.server.model.layout.LayoutObject;
import com.FCopentowork.server.repository.LayoutObjectRepository;
import com.FCopentowork.server.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LayoutObjectService {
    private final UserRepository UserRepository;
    private final LayoutObjectRepository LayoutObjectRepository;

    public LayoutObjectService(UserRepository UserRepository,
                               LayoutObjectRepository LayoutObjectRepository) {
        this.UserRepository = UserRepository;
        this.LayoutObjectRepository = LayoutObjectRepository;
    }

    public Map<String, Object> getLayoutObjects(Principal principal) {
        Map<String, Object> response = new HashMap<>();
        if (UserRepository.findByEmail(principal.getName()).isPresent()) {
            Integer userId = UserRepository.findByEmail(principal.getName()).get().getId();
            List<LayoutObject> layoutObjects = LayoutObjectRepository.findAllByUserId(userId);

            response.put("layoutObjects", layoutObjects);
        } else {
            // Should not get here, unless database is refreshed with active token
            throw new UserDoesNotExistException("User not found");
        }

        return response;
    }
}
