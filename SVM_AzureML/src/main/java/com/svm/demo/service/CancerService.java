package com.svm.demo.service;

import com.svm.demo.domain.Cancer;

public interface CancerService {
	
	void sendRequest(String data);
	
	String consultCancer(Cancer cancer);
}