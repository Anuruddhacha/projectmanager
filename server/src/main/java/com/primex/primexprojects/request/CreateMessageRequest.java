package com.primex.primexprojects.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateMessageRequest {
    private String content;
    private Long projectId;
    private Long senderId;
}
