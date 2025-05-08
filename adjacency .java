import java.util.*;

public class CompleteBuildingMap {
    public static void main(String[] args) {
        Map<String, List<String>> floor2 = new HashMap<>();
        Map<String, List<String>> floor3 = new HashMap<>();
        Map<String, List<String>> floor4 = new HashMap<>();
        Map<String, List<String>> floor5 = new HashMap<>();

        // 2nd Floor
        floor2.put("Lab7", Arrays.asList("410B"));
        floor2.put("410B", Arrays.asList("Lab7", "W/C1"));
        floor2.put("W/C1", Arrays.asList("410B", "PharmaCog1"));
        floor2.put("PharmaCog1", Arrays.asList("W/C1", "PharmaCog2"));
        floor2.put("PharmaCog2", Arrays.asList("PharmaCog1", "PharmaChem1"));
        floor2.put("PharmaChem1", Arrays.asList("PharmaCog2", "PharmaChem2"));
        floor2.put("PharmaChem2", Arrays.asList("PharmaChem1", "W/C2"));
        floor2.put("W/C2", Arrays.asList("PharmaChem2", "410B"));

        floor2.put("CR301", Arrays.asList("CR302"));
        floor2.put("CR302", Arrays.asList("CR301", "W/C3", "LT301"));
        floor2.put("W/C3", Arrays.asList("CR302", "CR303"));
        floor2.put("LT301", Arrays.asList("CR302", "PhysicalDept"));
        floor2.put("PhysicalDept", Arrays.asList("LT301", "DeptBiochem"));
        floor2.put("DeptBiochem", Arrays.asList("PhysicalDept", "CR303"));
        floor2.put("CR303", Arrays.asList("DeptBiochem", "CR304"));
        floor2.put("CR304", Arrays.asList("CR303", "Spin", "LT302"));
        floor2.put("Spin", Arrays.asList("CR304", "Optimization"));
        floor2.put("LT302", Arrays.asList("CR304", "W/C4"));
        floor2.put("W/C4", Arrays.asList("LT302", "CR305"));
        floor2.put("CR305", Arrays.asList("W/C4"));

        // 3rd Floor
        floor3.put("Stairs", List.of("CR401"));
        floor3.put("CR401", List.of("Stairs", "CR402"));
        floor3.put("CR402", List.of("CR401", "CR403"));
        floor3.put("CR403", List.of("CR402", "CR404"));
        floor3.put("CR404", List.of("CR403", "CR405"));
        floor3.put("CR405", List.of("CR404", "HOD Room"));
        floor3.put("HOD Room", List.of("CR405", "Staff Room"));
        floor3.put("Staff Room", List.of("HOD Room", "Department of English"));
        floor3.put("Department of English", List.of("Staff Room", "Department of Psychology"));
        floor3.put("Department of Psychology", List.of("Department of English", "Lab (Language Lab)"));
        floor3.put("Lab (Language Lab)", List.of("Department of Psychology", "Lift"));
        floor3.put("Lift", List.of("Lab (Language Lab)", "Male W/C"));
        floor3.put("Male W/C", List.of("Lift", "Female W/C"));
        floor3.put("Female W/C", List.of("Male W/C"));

        // 4th Floor
        floor4.put("Stair1", Arrays.asList("CR502"));
        floor4.put("CR502", Arrays.asList("Stair1", "CR503"));
        floor4.put("CR503", Arrays.asList("CR502", "CR504", "StaffRoom1"));
        floor4.put("CR504", Arrays.asList("CR503", "CR505"));
        floor4.put("CR505", Arrays.asList("CR504", "GuestToilet1", "PhysicsLab"));
        floor4.put("GuestToilet1", Arrays.asList("CR505"));
        floor4.put("PhysicsLab", Arrays.asList("CR505", "ChemLab"));
        floor4.put("ChemLab", Arrays.asList("PhysicsLab"));
        floor4.put("StaffRoom1", Arrays.asList("DeptMaths", "DeptBPS"));
        floor4.put("DeptMaths", Arrays.asList("StaffRoom1"));
        floor4.put("DeptBPS", Arrays.asList("StaffRoom1", "DeptCommerce"));
        floor4.put("DeptCommerce", Arrays.asList("DeptBPS", "StaffRoom2"));
        floor4.put("StaffRoom2", Arrays.asList("DeptCommerce", "CR501"));
        floor4.put("CR501", Arrays.asList("StaffRoom2", "Stair2"));
        floor4.put("Stair2", Arrays.asList("CR501"));
        floor4.put("GC_Lab", Arrays.asList("MoleCalc", "GuestToilet2"));
        floor4.put("MoleCalc", Arrays.asList("GC_Lab"));
        floor4.put("GuestToilet2", Arrays.asList("GC_Lab"));

        // 5th Floor
        floor5.put("Stairs", List.of("CR605"));
        floor5.put("CR605", List.of("Stairs", "CR604"));
        floor5.put("CR604", List.of("CR605", "CR603"));
        floor5.put("CR603", List.of("CR604", "CR602"));
        floor5.put("CR602", List.of("CR603", "CR601"));
        floor5.put("CR601", List.of("CR602", "Faculty Room"));
        floor5.put("Faculty Room", List.of("CR601", "Guest W/C", "Faculty Room (opposite side)", "Lift", "Male Common Room"));
        floor5.put("Guest W/C", List.of("Faculty Room", "Boys Toilet", "Faculty W/C", "Lift (bottom left area)", "Girls Toilet"));
        floor5.put("Boys Toilet", List.of("Guest W/C"));
        floor5.put("Library (Law)", List.of("Stair 2"));
        floor5.put("Faculty W/C", List.of("Library (Law)", "Guest W/C (2nd set)"));
        floor5.put("Lift", List.of("Guest W/C (bottom left area)", "Lab6", "Faculty Room", "WC (Male)"));
        floor5.put("Lab6", List.of("Lift", "Faculty Room"));
        floor5.put("Girls Toilet", List.of("Guest W/C", "P&D Room"));
        floor5.put("P&D Room", List.of("Girls Toilet", "Staff Room"));
        floor5.put("Staff Room", List.of("P&D Room", "LT602", "Male Common Room", "New Audi"));
        floor5.put("LT602", List.of("Staff Room", "Guest W/C"));
        floor5.put("WC (Male)", List.of("Lift", "Nautical Desk"));
        floor5.put("Nautical Desk", List.of("WC (Male)", "KP / Glass Lab"));
        floor5.put("KP / Glass Lab", List.of("Nautical Desk", "Groos"));
        floor5.put("Groos", List.of("KP / Glass Lab", "School of Law"));
        floor5.put("School of Law", List.of("Groos", "Moot Court"));
        floor5.put("Moot Court", List.of("School of Law", "NS Staff Cabin"));
        floor5.put("NS Staff Cabin", List.of("Moot Court", "Faculty Room"));
        floor5.put("Male Common Room", List.of("Faculty Room", "Staff Room"));
        floor5.put("New Audi", List.of("Staff Room", "Stair (Top left)"));

        // PRINTING
        printFloor("2nd Floor", floor2);
        printFloor("3rd Floor", floor3);
        printFloor("4th Floor", floor4);
        printFloor("5th Floor", floor5);
    }

    private static void printFloor(String floorName, Map<String, List<String>> floorMap) {
        System.out.println("\n" + floorName + " Adjacency List:");
        for (Map.Entry<String, List<String>> entry : floorMap.entrySet()) {
            System.out.println(entry.getKey() + " <-> " + entry.getValue());
        }
    }
}