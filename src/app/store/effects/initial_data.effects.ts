import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// RXJS
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Actions
import * as InitialDataActions from '../actions';

// Service
import { ApplicationService } from '../../services/http/application.service';

// Interface
import { InitialData } from '../interfaces';


@Injectable()
export class InitialDataEffects {

    constructor(
        private actions$: Actions,
        private service: ApplicationService
    ){}


    GetInitialData$ = createEffect(
        () => this.actions$.pipe(
            ofType(InitialDataActions.StartGetInitialData),
            mergeMap(
                (action) => this.service.get_initial_data(action.slug)
                .pipe(
                    map((data: InitialData) => InitialDataActions.GetInitialData( {data} )),
                    catchError( err => of(InitialDataActions.ErrorInitialData({error: err})) )
                )
            )
        )
    )

}
