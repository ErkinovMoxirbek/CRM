package com.example.controller;

import com.example.dto.StudentDTO;
import com.example.entity.StudentEntity;
import com.example.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    // 🔹 Barcha talabalarni olish

    @GetMapping()
    public List<StudentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }
    @GetMapping(value = "/showAll")
    public List<StudentEntity> getAllStudentsShow() {
        return studentService.getAllStudentsShow();
    }


    // 🔹 Yangi talaba qo‘shish
    @PostMapping(value = "/add")
    public ResponseEntity<StudentEntity> addStudent(@RequestBody StudentEntity student) {
        return ResponseEntity.ok(studentService.addStudent(student));
    }

    // 🔹 Telefon raqami bo‘yicha talabani qidirish
    @GetMapping("/{phoneNumber}")
    public ResponseEntity<StudentDTO> getStudentByPhone(@PathVariable String phoneNumber) {
        return studentService.getStudentByPhoneNumber(phoneNumber)
                .map(student -> ResponseEntity.ok(new StudentDTO(student.getId(),student.getName(),student.getSurname(),student.getBirthDate(),student.getGender(), student.getPhone() , student.getParentPhone(), student.getBalance(),student.getPayment(),student.getVisible())))
                .orElse(ResponseEntity.notFound().build());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudentByPhone(@PathVariable Long id) {
        Optional<StudentEntity> optionalStudent = studentService.getStudentById(id);

        if (optionalStudent.isPresent()) {
            StudentEntity student = optionalStudent.get();
            student.setVisible(false); // Talabani yashirib qo'yamiz
            studentService.updateStudent(student); // O'zgarishni saqlaymiz
            return ResponseEntity.ok("Student successfully hidden");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }


}
