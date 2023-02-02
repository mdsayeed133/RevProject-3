package com.revature.exceptions;

// Exception to be thrown by the AuthAspect
// Will be handled by a Spring Exception Handler to return a 401
public class FilterException extends RuntimeException {

    public FilterException() {
    }

    public FilterException(String message) {
        super(message);
    }

    public FilterException(String message, Throwable cause) {
        super(message, cause);
    }

    public FilterException(Throwable cause) {
        super(cause);
    }

    public FilterException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
