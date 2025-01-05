package com.backend.backend.service;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;

public class AdminServiceTest {

    @Mock
    private AdminService adminService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAdminDetails() {
        // Mock the admin service method
        when(adminService.getAdminDetails(1L)).thenReturn(new Admin(1L, "admin", "admin@restaurant.com"));
        
        Admin admin = adminService.getAdminDetails(1L);
        
        assertNotNull(admin);
        assertEquals("admin", admin.getName());
    }
}
