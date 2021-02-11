import { Component, OnInit } from '@angular/core';

// Services
import { DashboardService } from '../dashboard.service';
import { AuthService } from 'src/app/services';
import { TitleService } from 'src/app/services/title.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    user: any;
    loading: boolean = true;

    constructor(
        private service: DashboardService,
        private auth: AuthService,
        private title: TitleService
    ) { }

    ngOnInit() { 
        this.title.setTitle(this.title.servername + ' -  Informacion');
        this.getData();
    }

    getData() {
        this.service.get_current_user()
            .subscribe(
                success => {
                    console.log(success);
                    this.user = success;
                    this.loading = false;
                },
                err  => {
                    console.error(err);
                }
            );
    }

    logOut() {
        this.auth.logOut();
    }
}
