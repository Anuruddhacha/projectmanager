package com.primex.primexprojects.service;

import com.primex.primexprojects.model.User;

import java.util.concurrent.ExecutionException;

public interface UserService {


    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProjectSize(User user, int number) throws Exception;


}
