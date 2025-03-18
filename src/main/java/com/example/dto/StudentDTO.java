package com.example.dto;

import jakarta.persistence.Column;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentDTO {
    private Long id;
    private String name;
    private String surname;
    private int age;
    private String gender;
    private String phone;
    private Double balance;
    private Boolean payment;
    private Boolean visible;
}
