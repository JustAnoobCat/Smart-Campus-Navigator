package com.campusnav.model;

public class Location {
    private String id;
    private String label;
    private int floor;

    public Location(String id, String label, int floor) {
        this.id = id;
        this.label = label;
        this.floor = floor;
    }

    public String getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public int getFloor() {
        return floor;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }
}