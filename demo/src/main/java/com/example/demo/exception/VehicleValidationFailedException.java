package com.example.demo.exception;

public class VehicleValidationFailedException extends RuntimeException{

    public VehicleValidationFailedException(String message) {
        super(message);
    }
}
