package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    private Long id;
    private Long userId;
    private Date reservationDate;
    private int numberOfPeople;

    // Getters and Setters
}
