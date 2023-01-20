package com.thales.crudspring.model;

import org.springframework.web.bind.annotation.CrossOrigin;
import javax.persistence.*;

@Entity
@Table(name = "course")
@CrossOrigin(origins = "http://localhost:4200")
public class Course
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String category;

    /*
     *  Getters e Setters
     */
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }

    public void setCategory(String category) { this.category = category; }
}
