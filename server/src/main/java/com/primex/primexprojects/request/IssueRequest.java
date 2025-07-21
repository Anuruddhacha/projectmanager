package com.primex.primexprojects.request;

import lombok.Data;

import java.time.LocalDate;


@Data
public class IssueRequest {
    private String title;
    private String description;
    private String status;
    private String projectId;
    private String priority;
    private LocalDate dueDate;
}
