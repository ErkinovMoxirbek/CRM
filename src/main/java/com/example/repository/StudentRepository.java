package com.example.repository;

import com.example.dto.StudentDTO;
import com.example.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Long> {
    Optional<StudentEntity> findByPhone(String phoneNumber);
    List<StudentEntity> findAllByVisibleTrue();
}
