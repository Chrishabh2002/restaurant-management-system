package com.example.backend.service;

import com.example.backend.model.Review;
import com.example.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long id) {
        Optional<Review> review = reviewRepository.findById(id);
        return review.orElse(null);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review review) {
        if (reviewRepository.existsById(id)) {
            review.setId(id);
            return reviewRepository.save(review);
        }
        return null;
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
