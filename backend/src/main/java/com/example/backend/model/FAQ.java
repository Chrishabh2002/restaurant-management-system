package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "faqs")
public class FAQ {

    @Id
    private Long id;
    private String question;
    private String answer;

    // Getters and Setters
}
