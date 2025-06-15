package com.campusnav.model;

import java.util.*;

public class Graph {

    // Map of node id to Location object
    private Map<String, Location> nodes = new HashMap<>();

    // Map of node id to list of outgoing edges
    private Map<String, List<Edge>> adjacencyList = new HashMap<>();

    // Add a node (location) to the graph
    public void addNode(Location location) {
        nodes.put(location.getId(), location);
        adjacencyList.putIfAbsent(location.getId(), new ArrayList<>());
    }

    // Add an undirected edge between source and target with given weight
    public void addEdge(String source, String target, double weight) {
        if (!nodes.containsKey(source) || !nodes.containsKey(target)) return;
        adjacencyList.get(source).add(new Edge(source, target, weight));
        adjacencyList.get(target).add(new Edge(target, source, weight));
    }

    // Get all nodes
    public Map<String, Location> getNodes() {
        return nodes;
    }

    // Get adjacency list (edges) for all nodes
    public Map<String, List<Edge>> getAdjacencyList() {
        return adjacencyList;
    }

    // Get neighbors (edges) for a specific node
    public List<Edge> getNeighbors(String nodeId) {
        return adjacencyList.getOrDefault(nodeId, new ArrayList<>());
    }

    // Optional: Get a Location by id
    public Location getLocation(String id) {
        return nodes.get(id);
    }
}