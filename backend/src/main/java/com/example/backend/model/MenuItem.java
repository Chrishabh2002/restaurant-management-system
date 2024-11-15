package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    private Long id;
    private String name;
    private String description;
    private double price;
    private String category;

    // Getters and Setters
}
