import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asincrona-27';


  formulario = new FormGroup({
    usuarioControl: new FormControl('', [Validators.required, Validators.minLength(5)] ),
    contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(4)] ),
  })


  login(){
    if(this.formulario.valid){
      swal.fire({
        icon: 'success',
        title: 'Ingreso Correctamente',
        showConfirmButton: false,

      })
    }else{
      swal.fire({
        icon: 'error',
        title: 'Error al ingresar',
        text: 'Llene correctamente los campos',
      })
    }

  }

}
