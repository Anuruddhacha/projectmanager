package com.primex.primexprojects.service;

import com.primex.primexprojects.model.Message;

import java.util.List;

public interface MessageService {
    Message sendMessage(Long senderId, Long chatId, String content) throws Exception;

    List<Message> getMessagesByProjectId(Long projectId) throws Exception;
}
