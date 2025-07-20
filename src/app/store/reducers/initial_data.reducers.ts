import { Action, createReducer, on } from '@ngrx/store';
import {
    StartGetInitialData,
    GetInitialData,
    ErrorInitialData
} from '../actions';

import { InitialData } from '../interfaces';


export interface InitialDataState {
    data: InitialData;
    loading: Boolean;
    errors: any[];
}

export const InititalDataInitialState: InitialDataState = {
    data: {
        id: '',
        name : '',
        slug : '',
        images : [],
        initial_level : '',
        max_level : '',
        rates : '',
        facebook_url : '',
        facebook_enable : false,
        footer_menu : [],
        footer_info : '',
        footer_menu_enable : false,
        footer_info_enable : false,
        forum_url : '',
        last_online: false,
        project: '',
        downloads: []
    },
    loading: false,
    errors: []
}

const _InitialDataReducer = createReducer(InititalDataInitialState,
    on(StartGetInitialData, (state) => ({
        ...state,
        loading: true
    })),
    on(GetInitialData, (state, {data}) => ({
        ...state,
        data: data,
        loading: false
    })),
    on(ErrorInitialData, (state, {error}) => ({
        ...state,
        errors: error
    }))
);


export function InitialDataReducer(state: InitialDataState = InititalDataInitialState, action: Action) {
    return _InitialDataReducer(state, action );
}
