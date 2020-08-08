package com.example.demo;

public class ToysResponse {
    private int id;
    private String name;
    private String gender;
    private String age;
    private double price;
    private String availability;
    private String brand;

    public ToysResponse(int id, String name, String gender, String age, double price, String availability, String brand) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.price = price;
        this.availability = availability;
        this.brand = brand;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
