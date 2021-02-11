import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { TitleService } from 'src/app/services';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'manager-passwd',
  templateUrl: './password.component.html',
  styles: []
})
export class PasswordComponent implements OnInit {

  form: FormGroup
  message: any;

  constructor(
    private http: DashboardService,
    private title: TitleService,
    
  ) {
    this.form = new FormGroup({
      current_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      new_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      new_password_again: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit() {
    this.title.setTitle(this.title.servername + ' -  Cambio de Contraseña');
  }

  send() {
    this.http.change_password(this.form.value).subscribe(
    () => {
      // Show Message
      this.show_message('Contraseña cambiada con exito');
      // Clean form
      this.form.reset();
    },
    () => {
      this.show_message('Contraseña incorrecta');
    })
  }

  show_message(messge: string) {
    this.message = messge
    setTimeout(() => {
      this.message = null
    }, 3000)

  }

}
