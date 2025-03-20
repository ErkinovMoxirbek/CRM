package com.example.controller;

import com.example.dto.StudentDTO;
import com.example.entity.StudentEntity;
import com.example.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    // 🔹 Barcha talabalarni olish
    @GetMapping
    public List<StudentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }

    // 🔹 Yangi talaba qo‘shish
    @PostMapping
    public ResponseEntity<StudentEntity> addStudent(@RequestBody StudentEntity student) {
        return ResponseEntity.ok(studentService.addStudent(student));
    }

    // 🔹 Telefon raqami bo‘yicha talabani qidirish
    @GetMapping("/{phoneNumber}")
    public ResponseEntity<StudentDTO> getStudentByPhone(@PathVariable String phoneNumber) {
        return studentService.getStudentByPhoneNumber(phoneNumber)
                .map(student -> ResponseEntity.ok(new StudentDTO(student.getId(),student.getName(),student.getSurname(),student.getAge(),student.getGender(), student.getPhone(), student.getBalance(),student.getPayment(),student.getVisible())))
                .orElse(ResponseEntity.notFound().build());
    }
}
