package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.client.RestTemplate;

@Configuration
@ComponentScan(basePackages = "com.example.backend", excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "com.example.backend.test.*"))
public class AppBeansConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public SecurityContextHolder securityContext() {
        return new SecurityContextHolder();
    }
}
