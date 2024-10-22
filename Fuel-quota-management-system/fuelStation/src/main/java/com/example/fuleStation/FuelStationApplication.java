package com.example.fuleStation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FuelStationApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuelStationApplication.class, args);
	}

	@Bean
	public ModelMapper  modelMapper(){
		return new ModelMapper();
	}
}
