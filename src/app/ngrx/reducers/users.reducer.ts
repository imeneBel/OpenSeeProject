import { createFeatureSelector, createSelector, createReducer, on, Action } from '@ngrx/store';
import * as fromActions from '../actions/users.actions'
import { UsersState } from '../state/app.state';

export const initialState: UsersState = {users: []};

// Creating reducer
const _userReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, {payload}) => ({users: payload})),
);

export function userReducer(state: any, action: Action) {
  return _userReducer(state, action);
}

// Creating selectors
export const getUsersState = createFeatureSelector<UsersState>('userState');

export const getUsers = createSelector(
    getUsersState,
    (state: UsersState) => state.users
);