package com.primex.primexprojects.controller;


import com.primex.primexprojects.model.Project;
import com.primex.primexprojects.service.ProjectService;
import com.primex.primexprojects.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects/")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

}
