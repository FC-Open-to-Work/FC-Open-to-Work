package com.FCopentowork.server.controller;

import com.FCopentowork.server.exception.UserDoesNotExistException;
import com.FCopentowork.server.service.LayoutObjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/layout/object")
public class LayoutObjectController {
    private final LayoutObjectService LayoutObjectService;

    public LayoutObjectController(LayoutObjectService LayoutObjectService) {
        this.LayoutObjectService = LayoutObjectService;
    }

    @GetMapping(value = "",
            produces = "application/json")
    public ResponseEntity<Map<String, Object>> getUserLayoutObjects(Principal principal) {
        ResponseEntity<Map<String, Object>> responseEntity;
        Map<String, Object> response;
        try {
            response = LayoutObjectService.getLayoutObjects(principal);
            responseEntity = new ResponseEntity<>(response, HttpStatus.OK);
        } catch (UserDoesNotExistException e) {
            response = Map.of("error", e.getMessage());
            responseEntity = new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        return responseEntity;
    }
}