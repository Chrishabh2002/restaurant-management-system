package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    private Long id;
    private String name;
    private String phone;
    private String email;
    private String message;

    // Getters and Setters
}
