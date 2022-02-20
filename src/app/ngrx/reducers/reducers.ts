import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state'
import * as fromReducer from './users.reducer';

export const reducers: ActionReducerMap<AppState> = {
    userState: fromReducer.userReducer
  };