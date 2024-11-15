package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "loyalties")
public class Loyalty {

    @Id
    private Long id;
    private String customerId;
    private int points;

    // Getters and Setters
}
