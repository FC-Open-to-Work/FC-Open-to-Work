package com.FCopentowork.server.service;

import com.FCopentowork.server.exception.LayoutDeviceDoesNotExistException;
import com.FCopentowork.server.exception.UserDoesNotExistException;
import com.FCopentowork.server.model.layout.LayoutDevice;
import com.FCopentowork.server.repository.LayoutDeviceRepository;
import com.FCopentowork.server.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LayoutDeviceService {
    private final UserRepository UserRepository;
    private final LayoutDeviceRepository LayoutDeviceRepository;

    public LayoutDeviceService(UserRepository UserRepository,
                               LayoutDeviceRepository LayoutDeviceRepository) {
        this.UserRepository = UserRepository;
        this.LayoutDeviceRepository = LayoutDeviceRepository;
    }

    public Map<String, Object> getLayoutDevices(Principal principal) {
        Map<String, Object> response = new HashMap<>();
        if (UserRepository.findByEmail(principal.getName()).isPresent()) {
            Integer userId = UserRepository.findByEmail(principal.getName()).get().getId();
            List<LayoutDevice> layoutDevices= LayoutDeviceRepository.findAllByUserId(userId);

            response.put("layoutDevices", layoutDevices);
        } else {
            // Should not get here, unless database is refreshed with active token
            throw new UserDoesNotExistException("User not found");
        }

        return response;
    }

    public Map<String, Object> toggleLayoutDevice(Integer id, Principal principal) {
        Map<String, Object> response = new HashMap<>();
        if (UserRepository.findByEmail(principal.getName()).isPresent()) {
            Integer userId = UserRepository.findByEmail(principal.getName()).get().getId();
            LayoutDevice layoutDevice = LayoutDeviceRepository.findByIdAndUserId(id, userId);

            if (layoutDevice != null) {
                layoutDevice.setOn(!layoutDevice.isOn());
                LayoutDeviceRepository.save(layoutDevice);
                response.put("layoutDevice", layoutDevice);
            } else {
                throw new LayoutDeviceDoesNotExistException("LayoutDevice not found");
            }
        } else {
            // Should not get here, unless database is refreshed with active token
            throw new UserDoesNotExistException("User not found");
        }

        return response;
    }
}
