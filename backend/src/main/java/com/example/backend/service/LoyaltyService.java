package com.example.backend.service;

import com.example.backend.model.Loyalty;
import com.example.backend.repository.LoyaltyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoyaltyService {

    @Autowired
    private LoyaltyRepository loyaltyRepository;

    public List<Loyalty> getAllLoyalties() {
        return loyaltyRepository.findAll();
    }

    public Loyalty getLoyaltyById(Long id) {
        Optional<Loyalty> loyalty = loyaltyRepository.findById(id);
        return loyalty.orElse(null);
    }

    public Loyalty createLoyalty(Loyalty loyalty) {
        return loyaltyRepository.save(loyalty);
    }

    public Loyalty updateLoyalty(Long id, Loyalty loyalty) {
        if (loyaltyRepository.existsById(id)) {
            loyalty.setId(id);
            return loyaltyRepository.save(loyalty);
        }
        return null;
    }

    public void deleteLoyalty(Long id) {
        loyaltyRepository.deleteById(id);
    }
}
