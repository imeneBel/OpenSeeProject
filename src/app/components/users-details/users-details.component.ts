import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {AppState} from '../../ngrx/state/app.state';
import * as fromReducer from '../../ngrx/reducers/users.reducer';
import * as fromActions from '../../ngrx/actions/users.actions';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  users$: Observable<User[]>;


  constructor(private store: Store<AppState>) {
    this.users$ = store.select(fromReducer.getUsers);
   }

  ngOnInit(): void {
    this.store.dispatch(fromActions.ShowAllAction());

    this.users$.subscribe( (data) =>{
      console.log('Test Lecture des user/Todos composant =>', data);
    });
  }

}
