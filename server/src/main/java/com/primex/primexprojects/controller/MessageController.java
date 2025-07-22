package com.primex.primexprojects.controller;


import com.primex.primexprojects.model.Chat;
import com.primex.primexprojects.model.Message;
import com.primex.primexprojects.model.User;
import com.primex.primexprojects.request.CreateMessageRequest;
import com.primex.primexprojects.service.MessageService;
import com.primex.primexprojects.service.ProjectService;
import com.primex.primexprojects.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;


    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest messageRequest) throws Exception{
        User user = userService.findUserById(messageRequest.getSenderId());

        Chat chats = projectService.getProjectById(messageRequest.getProjectId()).getChat();
        if(chats == null) throw new Exception("Chat not found");
        Message sentMessage  = messageService.sendMessage(messageRequest.getSenderId(),
                                                          messageRequest.getProjectId(),
                                                           messageRequest.getContent());
        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId) throws Exception {
        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }




}
