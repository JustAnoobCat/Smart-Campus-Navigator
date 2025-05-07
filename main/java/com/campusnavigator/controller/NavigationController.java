package com.campusnavigator.controller;

import com.campusnavigator.model.PathRequest;
import com.campusnavigator.service.NavigationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/navigation")
public class NavigationController {

    private final NavigationService service = new NavigationService();

    @PostMapping("/path")
    public ResponseEntity<List<Integer>> getPath(@RequestBody PathRequest request) {
        List<Integer> path = service.findPath(request.source, request.destination);

        if (path.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(path);
    }
}
