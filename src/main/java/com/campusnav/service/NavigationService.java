package com.campusnav.service;

import com.campusnav.model.Edge;
import com.campusnav.model.Graph;
import com.campusnav.model.Location;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NavigationService {

    private final Graph graph;

    public NavigationService() {
        graph = new Graph();

        // ==================== FLOOR 1 NODES ====================
        graph.addNode(new Location("stairs1", "Stairs 1 (205,760)", 1));
        graph.addNode(new Location("CR-205", "CR-205 (425,760)", 1));
        graph.addNode(new Location("CR-204", "CR-204 (485,760)", 1));
        graph.addNode(new Location("CR-203", "CR-203 (535,760)", 1));
        graph.addNode(new Location("CR-202", "CR-202 (785,760)", 1));
        graph.addNode(new Location("CR-201", "CR-201 (885,760)", 1));
        graph.addNode(new Location("stairs2", "Stairs 2 (915,760)", 1));
        graph.addNode(new Location("MaleWC", "Male WC (915,710)", 1));
        graph.addNode(new Location("FacultyRoom", "Faculty Room (775,710)", 1));
        graph.addNode(new Location("ERPCell", "ERP Cell (345,710)", 1));
        graph.addNode(new Location("FemaleWC", "Female WC (205,710)", 1));
        graph.addNode(new Location("Lab8", "Lab 8 (345,610)", 1));
        graph.addNode(new Location("Lab2", "Lab-2 (775,610)", 1));
        graph.addNode(new Location("c2", "Connection 2 (775,410)", 1));
        graph.addNode(new Location("MaleLift", "Male Lift (595,410)", 1));
        graph.addNode(new Location("stairs3", "Stairs 3 (560,410)", 1));
        graph.addNode(new Location("FemaleLift", "Female Lift (525,410)", 1));
        graph.addNode(new Location("c1", "Connection 1 (345,410)", 1));
        graph.addNode(new Location("StaffRoom", "Staff Room (525,380)", 1));
        graph.addNode(new Location("ServerRoom", "Server Room (595,380)", 1));
        graph.addNode(new Location("c4", "Connection 4 (595,200)", 1));
        graph.addNode(new Location("c3", "Connection 3 (525,200)", 1));
        graph.addNode(new Location("CR-206", "CR-206 (445,200)", 1));
        graph.addNode(new Location("Lt-201", "LT-201 (265,200)", 1));
        graph.addNode(new Location("CR-207", "CR-207 (675,200)", 1));
        graph.addNode(new Location("Lt-202", "LT-202 (855,200)", 1));
        graph.addNode(new Location("Upstairs2", "Upstairs 2 (880,190)", 1));
        graph.addNode(new Location("Upstairs1", "Upstairs 1 (235,190)", 1));
        graph.addNode(new Location("Downstairs1", "Downstairs 1 (200,155)", 1));
        graph.addNode(new Location("Downstairs2", "Downstairs 2 (920,155)", 1));
        graph.addNode(new Location("MaleStaffWC", "Male Staff WC (920,75)", 1));
        graph.addNode(new Location("FemaleStaffWC", "Female Staff WC (200,75)", 1));
        graph.addNode(new Location("VCOffice", "VC's Office (875,30)", 1));
        graph.addNode(new Location("TCL", "TCL (1025,30)", 1));
        graph.addNode(new Location("stairs5", "Stairs 5 (775,30)", 1));
        graph.addNode(new Location("stairs4", "Stairs 4 (345,30)", 1));
        graph.addNode(new Location("PresidentOffice", "President's Office (245,30)", 1));
        graph.addNode(new Location("Library", "Library (95,30)", 1));

        // ==================== FLOOR 1 EDGES ====================
        addEdge("stairs1", "CR-205");
        addEdge("stairs1", "FemaleWC");
        addEdge("CR-205", "CR-204");
        addEdge("CR-204", "CR-203");
        addEdge("CR-203", "CR-202");
        addEdge("CR-202", "CR-201");
        addEdge("CR-201", "stairs2");
        addEdge("stairs2", "MaleWC");
        addEdge("MaleWC", "FacultyRoom");
        addEdge("FacultyRoom", "Lab2");
        addEdge("ERPCell", "FemaleWC");
        addEdge("ERPCell", "Lab8");
        addEdge("FemaleWC", "Lab8");
        addEdge("Lab8", "c1");
        addEdge("Lab2", "c2");
        addEdge("c2", "MaleLift");
        addEdge("MaleLift", "stairs3");
        addEdge("MaleLift", "ServerRoom");
        addEdge("stairs3", "FemaleLift");
        addEdge("FemaleLift", "StaffRoom");
        addEdge("FemaleLift", "c1");
        addEdge("StaffRoom", "c3");
        addEdge("ServerRoom", "c4");
        addEdge("c4", "CR-207");
        addEdge("c3", "CR-206");
        addEdge("CR-206", "Lt-201");
        addEdge("Lt-201", "Upstairs1");
        addEdge("CR-207", "Lt-202");
        addEdge("Lt-202", "Upstairs2");
        addEdge("Upstairs2", "Downstairs2");
        addEdge("Upstairs1", "Downstairs1");
        addEdge("Downstairs1", "FemaleStaffWC");
        addEdge("Downstairs2", "MaleStaffWC");
        addEdge("MaleStaffWC", "VCOffice");
        addEdge("FemaleStaffWC", "PresidentOffice");
        addEdge("VCOffice", "TCL");
        addEdge("VCOffice", "stairs5");
        addEdge("stairs5", "stairs4");
        addEdge("stairs4", "PresidentOffice");
        addEdge("PresidentOffice", "Library");

        // ==================== FLOOR 2 NODES ====================
        graph.addNode(new Location("Staff Room-4", "Staff Room-4 (95,30)", 2));
        graph.addNode(new Location("CR-303", "CR-303 (245,30)", 2));
        graph.addNode(new Location("Stairs9", "Stairs9 (345,30)", 2));
        graph.addNode(new Location("Stairs10", "Stairs10 (775,30)", 2));
        graph.addNode(new Location("CR-304", "CR-304 (875,30)", 2));
        graph.addNode(new Location("Animation", "Animation (1025,30)", 2));
        graph.addNode(new Location("Female Staff WC-2", "Female Staff WC-2 (200,75)", 2));
        graph.addNode(new Location("Male Staff WC-2", "Male Staff WC-2 (920,75)", 2));
        graph.addNode(new Location("Downstairs3", "Downstairs3 (200,155)", 2));
        graph.addNode(new Location("Downstairs4", "Downstairs4 (920,155)", 2));
        graph.addNode(new Location("Upstairs3", "Upstairs3 (235,190)", 2));
        graph.addNode(new Location("Upstairs4", "Upstairs4 (880,190)", 2));
        graph.addNode(new Location("Lt-301", "Lt-301 (265,200)", 2));
        graph.addNode(new Location("CR-301", "CR-301 (445,200)", 2));
        graph.addNode(new Location("c7", "c7 (525,200)", 2));
        graph.addNode(new Location("CR-305", "CR-305 (675,200)", 2));
        graph.addNode(new Location("c8", "c8 (595,200)", 2));
        graph.addNode(new Location("Lt-302", "Lt-302 (855,200)", 2));
        graph.addNode(new Location("Staff Room-2", "Staff Room-2 (525,380)", 2));
        graph.addNode(new Location("Staff Room-3", "Staff Room-3 (595,380)", 2));
        graph.addNode(new Location("Stairs8", "Stairs8 (560,410)", 2));
        graph.addNode(new Location("Male Lift-2", "Male Lift-2 (595,410)", 2));
        graph.addNode(new Location("Female Lift-2", "Female Lift-2 (525,410)", 2));
        graph.addNode(new Location("c5", "c5 (345,410)", 2));
        graph.addNode(new Location("Lab-7", "Lab-7 (345,610)", 2));
        graph.addNode(new Location("HOD Office-1", "HOD Office-1 (345,710)", 2));
        graph.addNode(new Location("Pharmacognosy-2", "Pharmacognosy-2 (485,760)", 2));
        graph.addNode(new Location("Pharmacognosy-1", "Pharmacognosy-1 (425,760)", 2));
        graph.addNode(new Location("PharmaChem-2", "PharmaChem-2 (535,760)", 2));
        graph.addNode(new Location("PharmaChem-1", "PharmaChem-1 (785,760)", 2));
        graph.addNode(new Location("Pharma-1", "Pharma-1 (885,760)", 2));
        graph.addNode(new Location("Stairs7", "Stairs7 (915,760)", 2));
        graph.addNode(new Location("Male WC-2", "Male WC-2 (915,710)", 2));
        graph.addNode(new Location("Faculty Room-2", "Faculty Room-2 (775,710)", 2));
        graph.addNode(new Location("Lab-3", "Lab-3 (775,610)", 2));
        graph.addNode(new Location("c6", "c6 (775,410)", 2));
        graph.addNode(new Location("Female WC-2", "Female WC-2 (205,710)", 2));
        graph.addNode(new Location("Stairs6", "Stairs6 (205,760)", 2));

        // ==================== FLOOR 2 EDGES ====================
        addEdge("Stairs9", "CR-303");
        addEdge("Stairs9", "Stairs10");
        addEdge("CR-303", "Female Staff WC-2");
        addEdge("CR-303", "Staff Room-4");
        addEdge("Female Staff WC-2", "Downstairs3");
        addEdge("Downstairs3", "Upstairs3");
        addEdge("Upstairs3", "Lt-301");
        addEdge("Lt-301", "CR-301");
        addEdge("CR-301", "c7");
        addEdge("c7", "Staff Room-2");
        addEdge("Staff Room-2", "Female Lift-2");
        addEdge("Female Lift-2", "Stairs8");
        addEdge("Female Lift-2", "c5");
        addEdge("c5", "Lab-7");
        addEdge("Lab-7", "HOD Office-1");
        addEdge("HOD Office-1", "Female WC-2");
        addEdge("Female WC-2", "Stairs6");
        addEdge("Stairs6", "Pharmacognosy-1");
        addEdge("Pharmacognosy-1", "Pharmacognosy-2");
        addEdge("Pharmacognosy-2", "PharmaChem-2");
        addEdge("PharmaChem-2", "PharmaChem-1");
        addEdge("PharmaChem-1", "Pharma-1");
        addEdge("Pharma-1", "Stairs7");
        addEdge("Stairs7", "Male WC-2");
        addEdge("Male WC-2", "Faculty Room-2");
        addEdge("Faculty Room-2", "Lab-3");
        addEdge("Lab-3", "c6");
        addEdge("c6", "Male Lift-2");
        addEdge("Male Lift-2", "Stairs8");
        addEdge("Male Lift-2", "Staff Room-3");
        addEdge("Staff Room-3", "c8");
        addEdge("c8", "CR-305");
        addEdge("CR-305", "Lt-302");
        addEdge("Lt-302", "Upstairs4");
        addEdge("Upstairs4", "Downstairs4");
        addEdge("Downstairs4", "Male Staff WC-2");
        addEdge("Male Staff WC-2", "CR-304");
        addEdge("CR-304", "Stairs10");
        addEdge("CR-304", "Animation");
        addEdge("Staff Room-4", "CR-303");


        // ==================== FLOOR 3 NODES ====================
        graph.addNode(new Location("CSE Department", "CSE Department (95,30)", 3));
        graph.addNode(new Location("CR-404", "CR-404 (245,30)", 3));
        graph.addNode(new Location("Stairs14", "Stairs14 (345,30)", 3));
        graph.addNode(new Location("Stairs15", "Stairs15 (775,30)", 3));
        graph.addNode(new Location("CR-405", "CR-405 (875,30)", 3));
        graph.addNode(new Location("TCL 3/4", "TCL 3/4 (1025,30)", 3));
        graph.addNode(new Location("Female Staff WC-3", "Female Staff WC-3 (200,75)", 3));
        graph.addNode(new Location("Male Staff WC-3", "Male Staff WC-3 (920,75)", 3));
        graph.addNode(new Location("Downstairs5", "Downstairs5 (235,190)", 3));
        graph.addNode(new Location("Downstairs6", "Downstairs6 (920,155)", 3));
        graph.addNode(new Location("Upstairs5", "Upstairs5 (265,200)", 3));
        graph.addNode(new Location("Upstairs6", "Upstairs6 (880,190)", 3));
        graph.addNode(new Location("Lt-401", "Lt-401 (445,200)", 3));
        graph.addNode(new Location("CR-403", "CR-403 (525,200)", 3));
        graph.addNode(new Location("c11", "c11 (595,200)", 3));
        graph.addNode(new Location("CR-406", "CR-406 (675,200)", 3));
        graph.addNode(new Location("c12", "c12 (855,200)", 3));
        graph.addNode(new Location("Lt-402", "Lt-402 (880,190)", 3));
        graph.addNode(new Location("Staff Room-5", "Staff Room-5 (560,410)", 3));
        graph.addNode(new Location("Staff Room-6", "Staff Room-6 (345,410)", 3));
        graph.addNode(new Location("Stairs13", "Stairs13 (345,610)", 3));
        graph.addNode(new Location("Male Lift-3", "Male Lift-3 (595,410)", 3));
        graph.addNode(new Location("Female Lift-3", "Female Lift-3 (525,410)", 3));
        graph.addNode(new Location("c9", "c9 (345,410)", 3));
        graph.addNode(new Location("IOT Lab", "IOT Lab (425,760)", 3));
        graph.addNode(new Location("Female WC-3", "Female WC-3 (485,760)", 3));
        graph.addNode(new Location("Stairs11", "Stairs11 (535,760)", 3));
        graph.addNode(new Location("HOD Office-2", "HOD Office-2 (785,760)", 3));
        graph.addNode(new Location("Basic Electronic Lab", "Basic Electronic Lab (885,760)", 3));
        graph.addNode(new Location("CR-402", "CR-402 (915,760)", 3));
        graph.addNode(new Location("Logic Design lab", "Logic Design lab (775,410)", 3));
        graph.addNode(new Location("Basic Electrical Lab", "Basic Electrical Lab (775,610)", 3));
        graph.addNode(new Location("CR-401", "CR-401 (595,410)", 3));
        graph.addNode(new Location("c10", "c10 (595,380)", 3));
        graph.addNode(new Location("Lab-4", "Lab-4 (595,200)", 3));
        graph.addNode(new Location("Faculty Room-3", "Faculty Room-3 (595,200)", 3));
        graph.addNode(new Location("Male WC-3", "Male WC-3 (915,710)", 3));
        graph.addNode(new Location("Stairs12", "Stairs12 (595,200)", 3));

        // ==================== FLOOR 3 EDGES ====================
        addEdge("Stairs15", "CR-405");
        addEdge("Stairs15", "Stairs14");
        addEdge("CR-405", "Male Staff WC-3");
        addEdge("CR-405", "TCL 3/4");
        addEdge("Male Staff WC-3", "Downstairs6");
        addEdge("Downstairs6", "Upstairs6");
        addEdge("Upstairs6", "Lt-402");
        addEdge("Lt-402", "CR-406");
        addEdge("CR-406", "c12");
        addEdge("c12", "Staff Room-6");
        addEdge("Staff Room-6", "Male Lift-3");
        addEdge("Male Lift-3", "stairs13");
        addEdge("Male Lift-3", "c10");
        addEdge("Stairs13", "Female Lift-3");
        addEdge("Female Lift-3", "Staff Room-5");
        addEdge("Female Lift-3", "c9");
        addEdge("Staff Room-5", "c11");
        addEdge("c11", "CR-403");
        addEdge("CR-403", "LT-401");
        addEdge("Lt-401", "Upstairs5");
        addEdge("Upstairs5", "Downstairs5");
        addEdge("Downstairs5", "Female Staff WC-3");
        addEdge("Female Staff WC-3", "CR-404");
        addEdge("CR-404", "Stairs14");
        addEdge("CR-404", "CSE Department");
        addEdge("c10", "Lab-4");
        addEdge("Lab-4", "Faculty Room-3");
        addEdge("Faculty Room-3", "Male WC-3");
        addEdge("Male WC-3", "Stairs12");
        addEdge("Stairs12", "CR-401");
        addEdge("CR-401", "Basic Electrical Lab");
        addEdge("Basic Electrical Lab", "Logic Design lab");
        addEdge("Logic Design lab", "Basic Electronic Lab");
        addEdge("Basic Electronic Lab", "CR-402");
        addEdge("CR-402", "Stairs11");
        addEdge("Stairs11", "Female WC-3");
        addEdge("Female WC-3", "HOD Office-2");
        addEdge("HOD Office-2", "IOT Lab");
        addEdge("IOT Lab", "c9");
        addEdge("c9", "Female Lift-3");

        addEdge("stairs1", "Stairs6");
        addEdge("stairs2", "Stairs7");
        addEdge("stairs3", "Stairs8");
        addEdge("stairs4", "Stairs9");
        addEdge("Stairs5", "Stairs10");
        addEdge("Stairs6", "Stairs11");
        addEdge("Stairs7", "Stairs12");
        addEdge("Stairs8", "Stairs13");
        addEdge("Stairs9", "Stairs14");
        addEdge("Stairs10", "Stairs15");


        addEdge("Downstairs3", "Upstairs1");
        addEdge("Downstairs4", "Upstairs2");
        addEdge("Downstairs5", "Upstairs3");
        addEdge("Downstairs6", "Upstairs4");
    }

    // Helper for undirected edge
    private void addEdge(String a, String b) {
        graph.addEdge(a, b, 1.0);
    }

    // ========== API: Get All Locations ==========
    public List<Map<String, Object>> getAllLocations() {
        List<Map<String, Object>> result = new ArrayList<>();
        for (Location loc : graph.getNodes().values()) {
            Map<String, Object> map = new HashMap<>();
            map.put("id", loc.getId());
            map.put("label", loc.getLabel());
            map.put("floor", loc.getFloor());
            result.add(map);
        }
        return result;
    }

    // ========== API: Find Shortest Path Using Dijkstra ==========
    public Map<String, Object> findPath(Object sourceObj, Object destObj) {
        String source = sourceObj.toString();
        String dest = destObj.toString();
        Map<String, Double> dist = new HashMap<>();
        Map<String, String> prev = new HashMap<>();
        Set<String> visited = new HashSet<>();
        PriorityQueue<String> pq = new PriorityQueue<>(Comparator.comparingDouble(node -> dist.getOrDefault(node, Double.POSITIVE_INFINITY)));
        for (String node : graph.getNodes().keySet()) {
            dist.put(node, Double.POSITIVE_INFINITY);
        }
        dist.put(source, 0.0);
        pq.add(source);

        while (!pq.isEmpty()) {
            String u = pq.poll();
            if (!visited.add(u)) continue;
            if (u.equals(dest)) break;
            for (Edge edge : graph.getNeighbors(u)) {
                String v = edge.getTarget();
                double alt = dist.get(u) + edge.getWeight();
                if (alt < dist.getOrDefault(v, Double.POSITIVE_INFINITY)) {
                    dist.put(v, alt);
                    prev.put(v, u);
                    pq.add(v);
                }
            }
        }

        List<String> path = new ArrayList<>();
        String curr = dest;
        while (curr != null && prev.containsKey(curr)) {
            path.add(curr);
            curr = prev.get(curr);
        }
        if (curr != null && curr.equals(source)) path.add(source);
        Collections.reverse(path);

        Map<String, Object> result = new HashMap<>();
        result.put("path", path);
        return result;
    }

    // ========== (Optional) Location Details API ==========
    public Map<String, Object> getLocationDetails(String id) {
        Location loc = graph.getLocation(id);
        Map<String, Object> map = new HashMap<>();
        if (loc != null) {
            map.put("id", loc.getId());
            map.put("label", loc.getLabel());
            map.put("floor", loc.getFloor());
        }
        return map;
    }
}