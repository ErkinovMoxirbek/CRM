package com.example.dto;

import lombok.*;

import java.time.LocalDate;
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentDTO {
    private Long id;
    private Long studentId;
    private Double amount;
    private LocalDate paymentDate;
}
