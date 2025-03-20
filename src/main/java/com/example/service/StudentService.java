package com.example.service;

import com.example.dto.StudentDTO;
import com.example.entity.StudentEntity;
import com.example.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public StudentEntity addStudent(StudentEntity student) {
        return studentRepository.save(student);
    }
    public StudentEntity updateStudent(StudentEntity student) {
        return studentRepository.save(student);
    }

    public List<StudentEntity> getAllStudents() {
        return studentRepository.findAllByVisibleTrue();
    }
    public List<StudentEntity> getAllStudentsShow() {
        return studentRepository.findAll();
    }

    public Optional<StudentEntity> getStudentByPhoneNumber(String phoneNumber) {
        return studentRepository.findByPhone(phoneNumber);
    }

    public Optional<StudentEntity> getStudentById(Long id) {
        return studentRepository.findById(id);
    }
}

