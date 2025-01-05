package com.backend.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    @Mock
    private UserService userService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateUser() {
        User user = new User(1L, "John Doe", "john@example.com");
        when(userService.createUser(any(User.class))).thenReturn(user);
        
        User createdUser = userService.createUser(new User("John Doe", "john@example.com"));
        
        assertNotNull(createdUser);
        assertEquals("John Doe", createdUser.getName());
    }
}
