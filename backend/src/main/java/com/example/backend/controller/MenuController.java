package com.example.backend.controller;

import com.example.backend.model.MenuItem;
import com.example.backend.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return menuService.getAllMenuItems();
    }

    @GetMapping("/{id}")
    public MenuItem getMenuItemById(@PathVariable Long id) {
        return menuService.getMenuItemById(id);
    }

    @PostMapping
    public MenuItem createMenuItem(@RequestBody MenuItem menuItem) {
        return menuService.createMenuItem(menuItem);
    }

    @PutMapping("/{id}")
    public MenuItem updateMenuItem(@PathVariable Long id, @RequestBody MenuItem menuItem) {
        return menuService.updateMenuItem(id, menuItem);
    }

    @DeleteMapping("/{id}")
    public void deleteMenuItem(@PathVariable Long id) {
        menuService.deleteMenuItem(id);
    }
}
