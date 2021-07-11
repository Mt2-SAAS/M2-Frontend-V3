import { createAction, props } from '@ngrx/store';

import { InitialData } from '../interfaces';


export const StartGetInitialData = createAction(
    '[InitData] Start Init Data'
);


export const GetInitialData = createAction(
    '[InitData] Get Data',
    props<{data: InitialData}>()
);


// By the moment we don't know the type of the error
export const ErrorInitialData = createAction(
    '[InitData] Error Get Data Data',
    props<{error: any}>()
);
