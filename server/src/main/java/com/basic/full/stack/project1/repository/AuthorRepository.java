package com.basic.full.stack.project1.repository;

import com.basic.full.stack.project1.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long>{

}
