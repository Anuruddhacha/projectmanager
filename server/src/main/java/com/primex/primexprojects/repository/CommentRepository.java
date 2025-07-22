package com.primex.primexprojects.repository;

import com.primex.primexprojects.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

   List<Comment> findByIssueId(Long issueId);

}
