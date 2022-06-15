import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	eforeEach(async () => {
		ait TestBed.configureTestingModule({
			larations: [
				omponent
					.compileComponents();
	);

	t('should create the app', () => {
		nst fixture = TestBed.createComponent(AppComponent);
		nst app = fixture.componentInstance;
		pect(app).toBeTruthy();
	);

	t(`should have as title 'svm_azureml_frontend'`, () => {
		nst fixture = TestBed.createComponent(AppComponent);
		nst app = fixture.componentInstance;
		pect(app.title).toEqual('svm_azureml_frontend');
	);

	t('should render title', () => {
		nst fixture = TestBed.createComponent(AppComponent);
		xture.detectChanges();
		nst compiled = fixture.nativeElement as HTMLElement;
		pect(compiled.querySelector('.content span')?.textContent).toContain('svm_azureml_frontend app is running!');
	);
});
