package com.thales.crudspring.controller;

import com.thales.crudspring.model.Course;
import com.thales.crudspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("api/courses")
@AllArgsConstructor
public class CourseController
{
    private final CourseRepository courseRepository;

    /**
     * List
     */
    @GetMapping
    public List<Course> list()
    {
        return courseRepository.findAll();
    }

    /**
     * Create
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Course> create(@RequestBody Course course, HttpServletResponse response)
    {
        Course savedCourse = courseRepository.save(course);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedCourse);
    }
}
