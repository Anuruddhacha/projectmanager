package com.primex.primexprojects.service;

import com.primex.primexprojects.model.Issue;
import com.primex.primexprojects.model.User;
import com.primex.primexprojects.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issueRequest, User user) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateIssueStatus(Long issueId, String status) throws Exception;
}
