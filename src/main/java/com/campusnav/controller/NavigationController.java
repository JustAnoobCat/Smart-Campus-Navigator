package com.campusnav.controller;

import com.campusnav.service.NavigationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "*")
@RestController
public class NavigationController {

    @Autowired
    private NavigationService navigationService;

    @PostMapping("/navigate")
    public Map<String, Object> navigate(@RequestBody Map<String, String> req) {
        return navigationService.findPath(req.get("source"), req.get("destination"));
    }

    @GetMapping("/locations")
    public List<Map<String, Object>> locations() {
        return navigationService.getAllLocations();
    }

    @GetMapping("/location-details/{id}")
    public Map<String, Object> locationDetails(@PathVariable String id) {
        return navigationService.getLocationDetails(id);
    }
}