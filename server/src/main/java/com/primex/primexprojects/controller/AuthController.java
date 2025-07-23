package com.primex.primexprojects.controller;


import com.primex.primexprojects.config.JwtProvider;
import com.primex.primexprojects.model.User;
import com.primex.primexprojects.repository.UserRepository;
import com.primex.primexprojects.request.LoginRequest;
import com.primex.primexprojects.response.AuthResponse;
import com.primex.primexprojects.service.CustomUserDetailsImpl;
import com.primex.primexprojects.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsImpl customUserDetails;

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping("/ping")
    public String ping()
    {
        return "Pong";
    }


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
        User isUserExists = userRepository.findByEmail(user.getEmail());
        if (isUserExists != null) {
            throw new Exception("Email already exists with another account");
        }

        User createdUser = new User();

        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());

        User savedUser = userRepository.save(createdUser);

        subscriptionService.createSubscription(savedUser);


        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse();
        response.setMessage("Signup Success");
        response.setJwt(jwt);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }



    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> signIn(@RequestBody LoginRequest loginRequest) throws Exception {

        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);


        String jwt = JwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse();
        response.setMessage("Sign in Success");
        response.setJwt(jwt);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password){
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);
        if(userDetails == null){
            throw  new BadCredentialsException("invalid username!");
        }

        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw  new BadCredentialsException("invalid password!");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
    }


}



