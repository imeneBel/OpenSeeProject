import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/users.actions';
import { UsersService } from '../../services/users/users.service';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) { }

  loadAllUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllAction),
    switchMap(() =>
      this.usersService.getTodosByUsers().pipe(
        map(data => fromActions.ShowAllSuccessAction({payload: data}))
      )
    )
  ));

}