import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html'
})
export class EmailComponent {

    mensaje: boolean = false;

    form!: FormGroup
    formInputValue = 'Recuperar';


    constructor(

    ) {
        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ])
        });
    }

    send() {

    }
}

