package com.primex.primexprojects.service;

import com.primex.primexprojects.model.PlanType;
import com.primex.primexprojects.model.Subscription;
import com.primex.primexprojects.model.User;

public interface SubscriptionService {


    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);


}
