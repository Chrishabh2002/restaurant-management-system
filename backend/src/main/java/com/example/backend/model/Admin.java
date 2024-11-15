package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
public class Admin {

    @Id
    private Long id;
    private String name;
    private String email;
    private String password;

    // Getters and Setters
}
