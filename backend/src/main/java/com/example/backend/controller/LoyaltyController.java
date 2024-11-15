package com.example.backend.controller;

import com.example.backend.model.Loyalty;
import com.example.backend.service.LoyaltyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loyalty")
public class LoyaltyController {

    @Autowired
    private LoyaltyService loyaltyService;

    @GetMapping
    public List<Loyalty> getAllLoyalties() {
        return loyaltyService.getAllLoyalties();
    }

    @GetMapping("/{id}")
    public Loyalty getLoyaltyById(@PathVariable Long id) {
        return loyaltyService.getLoyaltyById(id);
    }

    @PostMapping
    public Loyalty createLoyalty(@RequestBody Loyalty loyalty) {
        return loyaltyService.createLoyalty(loyalty);
    }

    @PutMapping("/{id}")
    public Loyalty updateLoyalty(@PathVariable Long id, @RequestBody Loyalty loyalty) {
        return loyaltyService.updateLoyalty(id, loyalty);
    }

    @DeleteMapping("/{id}")
    public void deleteLoyalty(@PathVariable Long id) {
        loyaltyService.deleteLoyalty(id);
    }
}
