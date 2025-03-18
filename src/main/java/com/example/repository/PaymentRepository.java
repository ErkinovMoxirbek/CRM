package com.example.repository;

import com.example.dto.PaymentDTO;
import com.example.dto.StudentDTO;
import com.example.entity.PaymentEntity;
import com.example.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
    List<PaymentEntity> findByStudentId(Long studentId);
}
