import { Component, OnInit } from '@angular/core';
import { ApirestService } from './../../../api/apirest.service';
import { ConsultaClass } from 'src/app/api/apirest.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-formulary',
	templateUrl: './formulary.component.html',
	styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

	public dto: ConsultaClass = new ConsultaClass();
	api = {
		id: null,
		clump: null,
		unifsize: null,
		unifshape: null,
		margadh: null,
		singepisize: null,
		barenuc: null,
		blandchrom: null,
		normnucl: null,
		mit: null,
		class: null
	}

	constructor(
		private consulta: ApirestService,
		private snackBar: MatSnackBar
	) { }

	ngOnInit(): void {
	}

	mostrarSnackbar(data: any): void {
		this.snackBar.open(data, 'x');
	}

	getStatus(): void {
		this.consulta.sendRequest().subscribe(
			data => {
				this.mostrarSnackbar(data);
			}
		);
	}

	clear(): void {
		this.dto = new ConsultaClass();
		this.snackBar.dismiss();
	}

	sendRequest(): void {
		const data = {
			id: this.api.id,
			clump: this.api.clump,
			unifsize: this.api.unifsize,
			unifshape: this.api.unifshape,
			margadh: this.api.margadh,
			singepisize: this.api.singepisize,
			barenuc: this.api.barenuc,
			blandchrom: this.api.blandchrom,
			normnucl: this.api.normnucl,
			mit: this.api.mit,
			class: this.api.class
		}
		console.log(this.dto);
		this.consulta.predict(data).subscribe();
	}
}