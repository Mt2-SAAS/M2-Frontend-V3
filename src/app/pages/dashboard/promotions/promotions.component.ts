import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Services
import { TitleService } from 'src/app/services';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'promotions',
  templateUrl: './promotions.component.html',
  styles: []
})
export class PromoComponent implements OnInit {

  status: string = '';
  form: FormGroup
  // loading: boolean;

  constructor(
    private title: TitleService,
    private http: DashboardService
  ) {
    this.form = new FormGroup({
        code : new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
        ]),
      });
  }

  ngOnInit() {
    this.title.setTitle(this.title.servername + ' -  Codigos Promocionales');
  }

  send(){
    let code = this.form.value['code'];
    this.http.use_payment_code(code)
        .subscribe(
            ({status}: any) => {
                this.status = status;
                this.form.reset();
                this.clean_fields();
            },
            (err: any) => {
                this.status = err.error.status;
                this.form.reset();
                this.clean_fields();
            }
        );
  }

  clean_fields() {
    setTimeout(() => {
        this.status = '';
    }, 5000)
  }

}
