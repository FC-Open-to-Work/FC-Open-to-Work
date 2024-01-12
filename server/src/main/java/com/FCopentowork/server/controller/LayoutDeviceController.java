package com.FCopentowork.server.controller;

import com.FCopentowork.server.exception.LayoutDeviceDoesNotExistException;
import com.FCopentowork.server.exception.UserDoesNotExistException;
import com.FCopentowork.server.service.LayoutDeviceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/layout/device")
public class LayoutDeviceController {
    private final LayoutDeviceService LayoutDeviceService;

    public LayoutDeviceController(LayoutDeviceService LayoutDeviceService) {
        this.LayoutDeviceService = LayoutDeviceService;
    }

    @GetMapping(value = "",
            produces = "application/json")
    public ResponseEntity<Map<String, Object>> getUserLayoutDevices(Principal principal) {
        ResponseEntity<Map<String, Object>> responseEntity;
        Map<String, Object> response;
        try {
            response = LayoutDeviceService.getLayoutDevices(principal);
            responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
        } catch (UserDoesNotExistException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return responseEntity;
    }

    @PutMapping(value = "{id}",
            consumes = "application/json",
            produces = "application/json")
    public ResponseEntity<Map<String, Object>> updateUserLayoutDevice(@PathVariable("id") Integer id, Principal principal) {
        ResponseEntity<Map<String, Object>> responseEntity;
        Map<String, Object> response;
        try {
            response = LayoutDeviceService.toggleLayoutDevice(id, principal);
            responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
        } catch (UserDoesNotExistException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (LayoutDeviceDoesNotExistException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return responseEntity;
    }
}
