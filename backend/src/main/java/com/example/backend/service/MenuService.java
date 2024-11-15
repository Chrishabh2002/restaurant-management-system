package com.example.backend.service;

import com.example.backend.model.MenuItem;
import com.example.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }

    public MenuItem getMenuItemById(Long id) {
        Optional<MenuItem> menuItem = menuRepository.findById(id);
        return menuItem.orElse(null);
    }

    public MenuItem createMenuItem(MenuItem menuItem) {
        return menuRepository.save(menuItem);
    }

    public MenuItem updateMenuItem(Long id, MenuItem menuItem) {
        if (menuRepository.existsById(id)) {
            menuItem.setId(id);
            return menuRepository.save(menuItem);
        }
        return null;
    }

    public void deleteMenuItem(Long id) {
        menuRepository.deleteById(id);
    }
}
