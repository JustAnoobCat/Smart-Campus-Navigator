import java.util.*;

class Campus{

    static class Edge {
        int to;
        int weight;

        Edge(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static class Pair {
        int distance;
        int node;

        Pair(int distance, int node) {
            this.distance = distance;
            this.node = node;
        }
    }

    public static int[] dijkstra(int V, List<List<Edge>> graph, int source) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> a.distance - b.distance);
        pq.offer(new Pair(0, source));

        while (!pq.isEmpty()) {
            Pair current = pq.poll();
            int u = current.node;
            int d = current.distance;

            for (Edge edge : graph.get(u)) {
                int v = edge.to;
                int weight = edge.weight;

                if (d + weight < dist[v]) {
                    dist[v] = d + weight;
                    pq.offer(new Pair(dist[v], v));
                }
            }
        }

        return dist;
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Edge>> graph = new ArrayList<>();

        // Initialize graph
        for (int i = 0; i < V; i++) {
            graph.add(new ArrayList<>());
        }

        // Add edges (room numbers as indices: 301=0, 302=1, etc.)
        graph.get(0).add(new Edge(1, 4)); // 301 -> 302
        graph.get(1).add(new Edge(0, 4)); // 302 -> 301

        graph.get(1).add(new Edge(2, 2)); // 302 -> 303
        graph.get(2).add(new Edge(1, 2)); // 303 -> 302

        graph.get(0).add(new Edge(2, 5)); // 301 -> 303
        graph.get(2).add(new Edge(0, 5)); // 303 -> 301

        graph.get(2).add(new Edge(3, 1)); // 303 -> 304
        graph.get(3).add(new Edge(2, 1)); // 304 -> 303

        int source = 0; // Room 301

        int[] distances = dijkstra(V, graph, source);

        System.out.println("Shortest distances from Room 301:");
        for (int i = 0; i < V; i++) {
            System.out.println("To Room " + (301 + i) + ": " + distances[i]);
        }
    }
}
