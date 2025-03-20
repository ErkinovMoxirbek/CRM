package com.example.controller;

import com.example.entity.PaymentEntity;
import com.example.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    // 🔹 To‘lov qo‘shish
    @PostMapping("/{studentId}")
    public ResponseEntity<PaymentEntity> makePayment(@PathVariable Long studentId, @RequestParam Double amount) {
        return ResponseEntity.ok(paymentService.makePayment(studentId, amount));
    }

    // 🔹 Talabaning to‘lov tarixini olish
    @GetMapping("/{studentId}")
    public List<PaymentEntity> getPayments(@PathVariable Long studentId) {
        return paymentService.getPaymentsByStudent(studentId);
    }
}