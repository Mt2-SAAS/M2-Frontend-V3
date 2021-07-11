import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Store
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';


@Injectable()
export class TitleService {

  servername!: string;

  constructor(
    private title: Title,
    private store: Store<AppState>,
  
    ) { 
      this.subscribe();
    }

  setTitle( nuevoTitulo: string) {
    if (this.servername === '') return
    this.title.setTitle( `${this.servername} - ${nuevoTitulo}`);
  }

  subscribe() {
    this.store.select('init')
      .subscribe( ({
        data: {
          name
        }
      }) => {
        this.servername = name;
      })
  }

}
