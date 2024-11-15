package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private Long id;
    private Long userId;
    private Long menuItemId;
    private int quantity;
    private String status;

    // Getters and Setters
}
