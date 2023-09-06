package com.FCopentowork.server.model;

import java.time.LocalDateTime;

public record User(
        String username,
        String password,
        String email,
        LocalDateTime dateCreated
) {
}
