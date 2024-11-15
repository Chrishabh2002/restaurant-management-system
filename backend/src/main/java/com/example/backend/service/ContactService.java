package com.example.backend.service;

import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Contact getContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact.orElse(null);
    }

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Contact updateContact(Long id, Contact contact) {
        if (contactRepository.existsById(id)) {
            contact.setId(id);
            return contactRepository.save(contact);
        }
        return null;
    }

    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
