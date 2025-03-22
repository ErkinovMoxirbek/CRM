package com.example.controller;

import com.example.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/dashboard")
public class DashboardController {
    @Autowired
    private StudentService studentService;
    @GetMapping(value = "/stats")
    public Map<String, Object> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("countStudent", studentService.studentCount());
        stats.put("frozenStudents", studentService.studentVisibleFalse());
        stats.put("countGroup", 0);
        stats.put("employees", 0);
        stats.put("courses", 0);
        return stats;
    }
}
