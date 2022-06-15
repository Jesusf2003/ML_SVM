package com.svm.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class SvmAzureMlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SvmAzureMlApplication.class, args);
	}
}