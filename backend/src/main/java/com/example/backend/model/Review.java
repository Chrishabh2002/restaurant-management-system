package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    private Long id;
    private Long userId;
    private Long menuItemId;
    private int rating;
    private String comment;

    // Getters and Setters
}
