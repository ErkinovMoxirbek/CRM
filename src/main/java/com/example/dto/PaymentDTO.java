package com.example.dto;

import lombok.*;

import java.time.LocalDate;
public class PaymentDTO {
    private Long id;
    private Long studentId;
    private Double amount;
    private LocalDate paymentDate;

    public PaymentDTO(LocalDate paymentDate, Double amount, Long studentId, Long id) {
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.studentId = studentId;
        this.id = id;
    }

    public PaymentDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }
}

