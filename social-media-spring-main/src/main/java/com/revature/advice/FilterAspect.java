package com.revature.advice;

import com.revature.annotations.Authorized;
import com.revature.exceptions.FilterException;
import com.revature.exceptions.NotLoggedInException;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Aspect
@Component
public class FilterAspect {
    private final HttpServletRequest req;

    public FilterAspect(HttpServletRequest req) {
        this.req = req;
    }
/*
    @Around("@annotation(profanityfilter)")
    public Object filter(ProceedingJoinPoint pjp) throws Throwable {


        // If the data inserted contains an illegal phrase.
        if() {
            throw new FilterException("The phrase: '"+ +"' is not acceptable as per our Terms of Service");
        }

        //if no issues, continue...
        return pjp.proceed(pjp.getArgs()); // Call the originally intended method
    }*/
}
