package com.FCopentowork.server.model.layout;

import jakarta.persistence.*;

@Entity
@Table(name = "layoutObjects")
public class LayoutObject {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer userId;
    private LayoutObjectType type;
    private String properties;

    public LayoutObject() {
    }

    public LayoutObject(Integer userId, LayoutObjectType type, String properties) {
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

    public LayoutObjectType getType() {
        return type;
    }

    public String getProperties() {
        return properties;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setType(LayoutObjectType type) {
        this.type = type;
    }

    public void setProperties(String properties) {
        this.properties = properties;
    }

    @Override
    public String toString() {
        return "LayoutObject{" +
                "id=" + id +
                ", userId=" + userId +
                ", type=" + type +
                ", properties='" + properties + '\'' +
                '}';
    }
}
