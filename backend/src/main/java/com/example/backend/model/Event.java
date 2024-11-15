package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "events")
public class Event {

    @Id
    private Long id;
    private String title;
    private String description;
    private Date date;
    private String location;

    // Getters and Setters
}
