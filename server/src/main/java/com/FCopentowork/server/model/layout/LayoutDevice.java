package com.FCopentowork.server.model.layout;

import jakarta.persistence.*;

@Entity
@Table(name = "layoutDevices")
public class LayoutDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer userId;
    private LayoutDeviceType type;
    private String properties;
    private boolean isOn;
    private Integer value;

    public LayoutDevice() {
    }

    public LayoutDevice(Integer userId, LayoutDeviceType type, String properties) {
        this.userId = userId;
        this.type = type;
        this.properties = properties;
    }

    public Integer getId() {
        return id;
    }

    public Integer getUserId() {
        return userId;
    }

    public LayoutDeviceType getType() {
        return type;
    }

    public String getProperties() {
        return properties;
    }

    public boolean isOn() {
        return isOn;
    }

    public Integer getValue() {
        return value;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setType(LayoutDeviceType type) {
        this.type = type;
    }

    public void setProperties(String properties) {
        this.properties = properties;
    }

    public void setOn(boolean isOn) {
        this.isOn = isOn;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public String toString() {
            return "LayoutDevice{" +
                    "id=" + id +
                    ", userId=" + userId +
                    ", type=" + type +
                    ", properties='" + properties + '\'' +
                    ", isOn=" + isOn +
                    ", value=" + value +
                    '}';
    }
}
