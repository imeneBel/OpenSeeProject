import { User } from '../../models/user';

export interface AppState {
	userState: UsersState;
}

export interface UsersState {
	users: User[];
}