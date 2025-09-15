package com.basic.full.stack.project1.controller;

import com.basic.full.stack.project1.model.Author;
import com.basic.full.stack.project1.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/authors")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @PostMapping("")
    public Author createAuthors(@RequestBody Author author){
        return authorRepository.save(author);
    }

    @GetMapping("")
    public List<Author> getAllAuthors(){
        return authorRepository.findAll();
    }
}
