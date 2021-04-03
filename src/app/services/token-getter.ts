import { LocalStorageService } from 'src/app/services';

let storage = new LocalStorageService()

export function token_getter() {
    return JSON.parse(storage.getItem('token') || '');
}
