import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const ShowAllAction = createAction('[User] Show All');
export const ShowAllSuccessAction = createAction('[User] Show All Success', props<{ payload: User[]}>());