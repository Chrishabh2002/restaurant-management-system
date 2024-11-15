package com.example.backend.service;

import com.example.backend.model.FAQ;
import com.example.backend.repository.FAQRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FAQService {

    @Autowired
    private FAQRepository faqRepository;

    public List<FAQ> getAllFAQs() {
        return faqRepository.findAll();
    }

    public FAQ getFAQById(Long id) {
        Optional<FAQ> faq = faqRepository.findById(id);
        return faq.orElse(null);
    }

    public FAQ createFAQ(FAQ faq) {
        return faqRepository.save(faq);
    }

    public FAQ updateFAQ(Long id, FAQ faq) {
        if (faqRepository.existsById(id)) {
            faq.setId(id);
            return faqRepository.save(faq);
        }
        return null;
    }

    public void deleteFAQ(Long id) {
        faqRepository.deleteById(id);
    }
}
