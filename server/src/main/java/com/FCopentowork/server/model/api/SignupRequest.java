package com.FCopentowork.server.model.api;

import jakarta.validation.constraints.NotBlank;

public record SignupRequest(@NotBlank String username,
                            @NotBlank String email,
                            @NotBlank String password) {
}
