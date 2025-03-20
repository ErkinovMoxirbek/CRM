package com.example.dto;

import com.example.enums.GenderEnum;
import jakarta.persistence.Column;
import lombok.*;

public class StudentDTO {
    private Long id;
    private String name;
    private String surname;
    private int age;
    private GenderEnum gender;
    private String phone;
    private Double balance;
    private Boolean payment;
    private Boolean visible;

    public StudentDTO(Long id, String name, String surname, int age, GenderEnum gender, String phone, Double balance, Boolean payment, Boolean visible) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.balance = balance;
        this.payment = payment;
        this.visible = visible;
    }

    public StudentDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Boolean getPayment() {
        return payment;
    }

    public void setPayment(Boolean payment) {
        this.payment = payment;
    }

    public Boolean getVisible() {
        return visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }
}
