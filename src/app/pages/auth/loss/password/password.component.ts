import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent {

    mensaje: boolean = false;

    form!: FormGroup
    formInputValue = 'Recuperar';


    constructor(

    ) {
        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ])
        });
    }

    send() {

    }
}

