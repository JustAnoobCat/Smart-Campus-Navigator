package com.campusnavigator.service;

import com.campusnavigator.util.Graph;
import java.util.*;

public class NavigationService {
    private final Graph graph;

    public NavigationService() {
        this.graph = new Graph();
        // You can load campus map here manually or from a file
        graph.addEdge(1, 2, 2);
        graph.addEdge(2, 3, 3);
        graph.addEdge(3, 4, 2);
        graph.addEdge(4, 5, 4);
        graph.addEdge(1, 5, 10);
    }

    public List<Integer> findPath(int source, int destination) {
        Map<Integer, Integer> heuristic = graph.dijkstra(destination);
        return graph.aStar(source, destination, heuristic);
    }
}
