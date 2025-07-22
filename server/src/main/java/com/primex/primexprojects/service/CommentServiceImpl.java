package com.primex.primexprojects.service;


import com.primex.primexprojects.model.Comment;
import com.primex.primexprojects.model.Issue;
import com.primex.primexprojects.model.User;
import com.primex.primexprojects.repository.CommentRepository;
import com.primex.primexprojects.repository.IssueRepository;
import com.primex.primexprojects.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Comment createComment(Long issueId, Long userId, String commentText) throws Exception {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Issue> optionalIssue = issueRepository.findById(issueId);

        if(optionalIssue.isEmpty()){
            throw new Exception("Issue not found with id "+ issueId);
        }
        if(optionalUser.isEmpty()){
            throw new Exception("User not found with id "+ userId);
        }

        Issue issue = optionalIssue.get();
        User user = optionalUser.get();

        Comment comment = new Comment();
        comment.setIssue(issue);
        comment.setUser(user);
        comment.setCreatedDateTime(LocalDateTime.now());
        comment.setContent(commentText);

        Comment savedComment = commentRepository.save(comment);
        issue.getComments().add(savedComment);

        return savedComment;
    }

    @Override
    public void deleteComment(Long commentId, Long userId) throws Exception {
        Optional<User> optionalUser = userRepository.findById(userId);
        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        if(optionalComment.isEmpty()){
            throw new Exception("Comment not found with id "+ commentId);
        }
        if(optionalUser.isEmpty()){
            throw new Exception("User not found with id "+ userId);
        }
        Comment comment = optionalComment.get();
        User user = optionalUser.get();

        if(comment.getUser().equals(user)){
            commentRepository.delete(comment);
        }else{
            throw new Exception("User does not have permission to delete this comment "+ userId);
        }

    }

    @Override
    public List<Comment> findCommentByIssueId(Long issueId) {
        return commentRepository.findByIssueId(issueId);
    }
}
