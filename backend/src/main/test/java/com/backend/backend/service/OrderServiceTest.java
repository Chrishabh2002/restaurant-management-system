package com.backend.backend.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;

public class OrderServiceTest {

    @Mock
    private OrderService orderService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateOrder() {
        Order order = new Order(1L, "Food", 2);
        when(orderService.createOrder(any(Order.class))).thenReturn(order);
        
        Order createdOrder = orderService.createOrder(new Order("Food", 2));
        
        assertNotNull(createdOrder);
        assertEquals("Food", createdOrder.getItemName());
    }
}
