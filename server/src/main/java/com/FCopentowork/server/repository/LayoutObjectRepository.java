package com.FCopentowork.server.repository;

import com.FCopentowork.server.model.layout.LayoutObject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LayoutObjectRepository extends JpaRepository<LayoutObject, Integer> {
    List<LayoutObject> findAllByUserId(Integer userId);
}
