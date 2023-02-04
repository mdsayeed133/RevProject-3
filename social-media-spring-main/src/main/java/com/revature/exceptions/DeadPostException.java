package com.revature.exceptions;
//this
public class DeadPostException extends RuntimeException{
    public DeadPostException() {
    }

    public DeadPostException(String message) {
        super(message);
    }

    public DeadPostException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeadPostException(Throwable cause) {
        super(cause);
    }

    public DeadPostException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
