
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html'
})
export class ActiveComponent implements OnInit {

    user: any;
    message!: string;
    loader!: boolean;

    constructor(
        private router: ActivatedRoute,
        private http: AuthService
    ) {}

    ngOnInit() {
        const payload = this.router.snapshot.params.payload;
        this.getData(payload);
    }

    getData(payload: string) {
        this.loader = true
        this.http.active(payload)
            .subscribe(
                (response: any) => {
                    this.message = `La cuenta ${response.user.login} ha sido activada exitosamente.`
                    this.loader = false
                },
                () => {
                    this.message = `El token enviado ( ${payload} ) no es valida o ya fue usado`
                    this.loader = false
                }
            )
    }

}