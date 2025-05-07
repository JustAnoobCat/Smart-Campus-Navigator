package com.campusnavigator.util;

import java.util.*;

public class Graph {
    public Map<Integer, List<Edge>> adj = new HashMap<>();

    public void addEdge(int u, int v, int cost) {
        adj.putIfAbsent(u, new ArrayList<>());
        adj.putIfAbsent(v, new ArrayList<>());
        adj.get(u).add(new Edge(v, cost));
        adj.get(v).add(new Edge(u, cost)); // Undirected
    }

    public Map<Integer, Integer> dijkstra(int start) {
        Map<Integer, Integer> dist = new HashMap<>();
        for (int node : adj.keySet()) dist.put(node, Integer.MAX_VALUE);
        dist.put(start, 0);

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.offer(new int[]{start, 0});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int u = current[0], d = current[1];
            if (d > dist.get(u)) continue;

            for (Edge edge : adj.get(u)) {
                int v = edge.to;
                int cost = d + edge.cost;
                if (cost < dist.get(v)) {
                    dist.put(v, cost);
                    pq.offer(new int[]{v, cost});
                }
            }
        }
        return dist;
    }

    public List<Integer> aStar(int source, int dest, Map<Integer, Integer> h) {
        Map<Integer, Integer> g = new HashMap<>();
        Map<Integer, Integer> f = new HashMap<>();
        Map<Integer, Integer> cameFrom = new HashMap<>();

        for (int node : adj.keySet()) {
            g.put(node, Integer.MAX_VALUE);
            f.put(node, Integer.MAX_VALUE);
        }

        g.put(source, 0);
        f.put(source, h.getOrDefault(source, Integer.MAX_VALUE));

        PriorityQueue<int[]> openSet = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        openSet.offer(new int[]{source, f.get(source)});

        while (!openSet.isEmpty()) {
            int[] current = openSet.poll();
            int u = current[0];

            if (u == dest) break;

            for (Edge edge : adj.get(u)) {
                int v = edge.to;
                int tentativeG = g.get(u) + edge.cost;

                if (tentativeG < g.getOrDefault(v, Integer.MAX_VALUE)) {
                    cameFrom.put(v, u);
                    g.put(v, tentativeG);
                    f.put(v, tentativeG + h.getOrDefault(v, Integer.MAX_VALUE));
                    openSet.offer(new int[]{v, f.get(v)});
                }
            }
        }

        if (!cameFrom.containsKey(dest)) return Collections.emptyList();

        List<Integer> path = new ArrayList<>();
        int curr = dest;
        while (cameFrom.containsKey(curr)) {
            path.add(curr);
            curr = cameFrom.get(curr);
        }
        path.add(source);
        Collections.reverse(path);
        return path;
    }
}
