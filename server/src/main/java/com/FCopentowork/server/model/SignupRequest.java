package com.FCopentowork.server.model;

public record SignupRequest(String firstName,
                            String lastName,
                            String email,
                            String password) {
}
