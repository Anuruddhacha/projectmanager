package com.primex.primexprojects.repository;

import com.primex.primexprojects.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
