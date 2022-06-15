package com.svm.demo.controller;

import com.svm.demo.domain.Cancer;
import com.svm.demo.service.CancerService;
import com.svm.demo.service.CancerServiceI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CancerController {
	
	@Autowired
	private CancerService cancerService;
	
	@PostMapping
	public String consultCancer(@RequestBody Cancer cancer) {
		return cancerService.consultCancer(cancer);
	}
}