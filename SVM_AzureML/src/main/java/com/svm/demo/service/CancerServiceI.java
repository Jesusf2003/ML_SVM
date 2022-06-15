package com.svm.demo.service;

import com.svm.demo.domain.Cancer;

import org.apache.http.client.fluent.*;
import org.apache.http.entity.ContentType;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CancerServiceI implements CancerService {
	
	static String API_URL = "";
	static String API_KEY = "";

	@Override
	public void sendRequest(String data) {
		try {
			Content content = Request.Post(API_URL)
					.addHeader("Content-Type", "application/json")
					.addHeader("Authorization", "Bearer " + API_KEY)
					.bodyString(data, ContentType.APPLICATION_JSON)
					.execute().returnContent();
			System.out.println(content);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Override
	public String consultCancer(Cancer cancer) {
		
		JSONArray items = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONObject input1 = new JSONObject();
		JSONObject inputs = new JSONObject();

		obj.put("ID", cancer.getId());
		obj.put("Clump", cancer.getClump());
		obj.put("UnifSize", cancer.getUnifsize());
		obj.put("UnifShape", cancer.getUnifshape());
		obj.put("MargAdh", cancer.getMargadh());
		obj.put("SingEpiSize", cancer.getSingepisize());
		obj.put("BareNuc", cancer.getBarenuc());
		obj.put("BlandChrom", cancer.getBlandchrom());
		obj.put("NormNucl", cancer.getNormnucl());
		obj.put("Mit", cancer.getMit());
		obj.put("Class", cancer.getClas());
		
		items.add(obj);
		
		input1.put("input1", items);
		
		inputs.put("Inputs", input1);
		
		sendRequest(inputs.toJSONString());
		System.out.println(inputs.toJSONString());
		return obj.toJSONString();
	}
}