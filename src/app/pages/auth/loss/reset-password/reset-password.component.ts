import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Global Services
import { TitleService } from 'src/app/services';
import { AuthService } from '../../auth.service';


@Component({
    selector: 'app-email',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    message: boolean = false;
    messageText: string = '';

    form!: FormGroup
    formInputValue = 'Recuperar';


    constructor(
        private title: TitleService,
        private auth: AuthService
    ) {
        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ])
        });
    }

    ngOnInit(){
        this.title.setTitle(this.title.servername + ' - Restablecer Contraseña');
    }

    send() {
        this.auth.reset_password(this.form.value)
            .subscribe(
                // Success
                () => {
                    this.message = true;
                    this.messageText = 'Se ha enviado un correo electronico con las instrucciones para restablecer su contraseña.';
                    this.clean();
                    this.form.reset();
                },
                // Error
                () => {
                    // Clean Message
                    this.message = true;
                    this.messageText = 'No se encontro el nombre de usuario solicitado.';
                    this.clean();
                    this.form.reset();
                }
            )
    }

    clean() {
        setTimeout(() => {
            this.message = false;
            this.messageText = '';
        }, 10000)
    }
}

