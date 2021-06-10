import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-password',
    templateUrl: './process-password.component.html'
})
export class ProcessPasswordComponent implements OnInit {

    user: any;
    message!: boolean;
    messageText!: string;

    loader!: boolean;
    payload!: string;

    form!: FormGroup
    formShow!: boolean;
    formInputValue = 'Recuperar';

    constructor(
        private router: ActivatedRoute,
        private navigate: Router,
        private http: AuthService
    ) {
        this.form = new FormGroup({
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
        this.payload = this.router.snapshot.params.payload;
        this.getData(this.payload);
    }

    getData(payload: string) {
        this.loader = true
        this.http.validate_password_token(payload)
            .subscribe(
                // Success
                () => {
                    this.formShow = true;
                    this.loader = false;
                },
                // Error
                () => {
                    this.formShow = false;
                    this.loader = false;
                }
            );
    }

    send() {
        this.http.process_password(this.form.value, this.payload)
            .subscribe(
                // Success
                () => {
                    this.form.reset();
                    this.message = true;
                    this.messageText = 'Se ha realizado el cambio de contraseña exitosamente.';
                    this.clean();
                    this.redirect();
                },
                // Error
                () => {
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

    redirect() {
        setTimeout(() => {
            this.navigate.navigate(['/home']);
        }, 20000);
        
    }

}