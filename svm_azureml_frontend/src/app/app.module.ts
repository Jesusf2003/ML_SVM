import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormularyComponent } from './component/api/formulary/formulary.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	declarations: [
		AppComponent,
		FormularyComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		HttpClientModule,

		FormsModule,

		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatSnackBarModule,
		MatMenuModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }