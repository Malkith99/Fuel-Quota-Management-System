package com.example.demo.exception;

public class VehicleOwnerAlreadyExistsException extends RuntimeException {

    public VehicleOwnerAlreadyExistsException(String message) {
        super(message);
    }
}
