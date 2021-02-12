import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

// Local Services
import { AuthService } from '../auth.service';

// Global Services
import { TitleService } from 'src/app/services';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-join',
    templateUrl: './join.component.html'
})
export class JoinComponent implements OnInit {

    form!: FormGroup;
    formInputValue = 'Registrar';
    checkbox = false;

    constructor(
        private title: TitleService,
        private router: Router,
        private auth: AuthService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' - Registro');

        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ], [ this.validateUser.bind(this) ]),


            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            real_name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            social_id: new FormControl('', [
                Validators.required,
                Validators.pattern('.{7,7}')
            ])
        });

     }

    registro() {
        this.auth.register(this.form.value)
            .subscribe(
                () => {
                    this.router.navigate(['/success']);
                },
                err => {
                    console.error(err);
                }
            );
    }

    truecheck() {
        this.checkbox = !this.checkbox;
        return this.checkbox;
    }

    validateUser(control: AbstractControl): Promise<any> | Observable<any> {
        let userbool: boolean;
        const user = control.value.toLowerCase();
        const promise = new Promise(
            (resolve, reject) => {
                this.auth.verify_user(user)
                    .subscribe(
                        (response: any) => {
                            // Check if user exist
                            if (response.status){
                                userbool = true
                            } else {
                                userbool = false
                            }
                            // Do the rest
                            setTimeout(() => {
                                if (userbool) {
                                    resolve({success: true})
                                } else {
                                    resolve({success: false})
                                }
                            }, 2000)
                            
                        },
                        err => console.log
                    )
            }
        )
        return promise;   
    }
}
