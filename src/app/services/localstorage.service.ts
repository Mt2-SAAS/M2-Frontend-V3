import { Injectable } from '@angular/core';
import {AppComponent} from '../app.component';

class LocalStorage implements Storage {
    [name: string]: any;
    readonly length: number = 0;
    clear(): void {}
    getItem(key: string): string | null  {return ''}
    key(index: number): string | null  {return ''}
    removeItem(key: string): void {}
    setItem(key: string, value: string): void {}
  }

@Injectable()
export class LocalStorageService {

    private storage: Storage;
    [name: string]: any;

    length: number = 0;

    constructor() {
        this.storage = new LocalStorage();
    
        AppComponent.isBrowser.subscribe(isBrowser => {
          if (isBrowser) {
            this.storage = localStorage;
          }
        });
    }

    
    set_token(token: string) {
        this.storage.setItem('token', token);
    }

    get_token() {

        return this.storage.getItem('token') || '';

    }

    delete_token() {
        this.storage.removeItem('token');
    }

    set_item(itemName: string, item: any) {
        this.storage.setItem(itemName, item);
    }

    get_item(itemName: string) {
        return this.storage.getItem(itemName) || '';
    }

    delete_item(itemName: string) {
        this.storage.removeItem(itemName);
    }

}
