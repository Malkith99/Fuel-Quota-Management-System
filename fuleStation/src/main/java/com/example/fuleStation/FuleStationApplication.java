package com.example.fuleStation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FuleStationApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuleStationApplication.class, args);
	}

	@Bean
	public ModelMapper  modelMapper(){
		return new ModelMapper();
	}
}
