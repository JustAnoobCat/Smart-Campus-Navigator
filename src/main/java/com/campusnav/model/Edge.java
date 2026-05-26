package com.campusnav.model;

public class Edge {
    private String source;
    private String target;
    private double weight;

    public Edge(String source, String target, double weight) {
        this.source = source;
        this.target = target;
        this.weight = weight;
    }

    public String getSource() {
        return source;
    }

    public String getTarget() {
        return target;
    }

    public double getWeight() {
        return weight;
    }
}