package com.FCopentowork.server.repository;

import com.FCopentowork.server.model.layout.LayoutDevice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LayoutDeviceRepository extends JpaRepository<LayoutDevice, Integer> {
    List<LayoutDevice> findAllByUserId(Integer userId);
    LayoutDevice findByIdAndUserId(Integer id, Integer userId);
}
