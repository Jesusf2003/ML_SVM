import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConsultaClass } from './apirest.model';

@Injectable({
	providedIn: 'root'
})
export class ApirestService {

	private API_SERVER = "localhost:8081/api";

	constructor(private hpclient: HttpClient) { }

	sendRequest(data): Observable<any> {
		return this.hpclient.post(this.API_SERVER, data);
	}

	public predict(consult: ConsultaClass): Observable<ConsultaClass> {
		return this.hpclient.post<ConsultaClass>(this.API_SERVER, consult);
	}
}