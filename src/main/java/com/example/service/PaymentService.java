package com.example.service;

import com.example.dto.PaymentDTO;
import com.example.dto.StudentDTO;
import com.example.entity.PaymentEntity;
import com.example.entity.StudentEntity;
import com.example.repository.PaymentRepository;
import com.example.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private StudentRepository studentRepository;

    public PaymentEntity makePayment(Long studentId, Double amount) {
        StudentEntity student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Talaba topilmadi"));

        System.out.println("Talaba topildi: " + student); // Debug uchun qo'shing

        PaymentEntity payment = new PaymentEntity();
        payment.setStudentId(student.getId()); // Xato shu joyda chiqayapti
        payment.setAmount(amount);

        student.setBalance(student.getBalance() + amount);
        studentRepository.save(student);

        return paymentRepository.save(payment);
    }

    public List<PaymentEntity> getPaymentsByStudent(Long studentId) {
        return paymentRepository.findByStudentId(studentId);
    }

}
