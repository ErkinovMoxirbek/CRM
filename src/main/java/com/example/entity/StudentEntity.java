package com.example.entity;

import com.example.enums.GenderEnum;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "student")
@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "age")
    private int age;
    @Column(name = "gender")
    private GenderEnum gender;
    @Column(name = "phone")
    private String phone;
    @Column(name = "balance")
    private Double balance = 0.0;
    @Column(name = "payment")
    private Boolean payment = false;
    @Column(name = "visible")
    private Boolean visible = false;
}
