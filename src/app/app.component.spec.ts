import { ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'asincrona-27'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('asincrona-27');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('asincrona-27');
  });

  it('Test Formulario invalido',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.formulario.valid).toBe(false)
  });

  it('Test formulario valido',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let usuario=app.formulario.controls['usuarioControl'];
    let contraseña=app.formulario.controls['contraseñaControl'];
    usuario.setValue('cristhian')
    contraseña.setValue('123456')
    expect(app.formulario.valid).toBe(true)
  })


  it('Test boton enviar',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    let usuario=app.formulario.controls['usuarioControl'];
    let contraseña=app.formulario.controls['contraseñaControl'];
    usuario.setValue('cristhian')
    contraseña.setValue('123456')

    let boton=fixture.debugElement.query(By.css('.boton'))
    boton.nativeElement.click()

    expect(app.mensaje).toEqual('Login correcto')
  });


});
