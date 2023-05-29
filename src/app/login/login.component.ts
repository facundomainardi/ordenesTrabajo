import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario!: string;
  contrasenia!: string;

  iniciarSesion() {
    // Aquí puedes realizar las validaciones necesarias y enviar una solicitud al servidor para autenticar al usuario
    if (this.usuario === 'a' && this.contrasenia === 'a') {
      alert('Inicio de sesión exitoso.');
    } else {
      alert('Credenciales incorrectas.');
    }
  }
}
