import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    init: reducers.InitialDataState
}

export const appReducers: ActionReducerMap<AppState> = {
   init: reducers.InitialDataReducer
}
