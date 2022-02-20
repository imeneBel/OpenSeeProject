import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { USERS_URL } from './constants/urls';
import { TODOS_URL } from './constants/urls';
import { User } from '../../models/user';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getTodosByUsers(): Observable<any> {

    return forkJoin({
      usersOutput: this.getUsers(),
      todosOutput: this.getTodos()
    }).pipe(
      map((data) => {
        let users = data['usersOutput'];
        let todos = data['todosOutput'];
        return this.sortTodosByUsers(users, todos);
      })
    );
  }

  sortTodosByUsers(users: User[], todos: Todo[]): User[] {
    users.map((user) => {
      user.todos = todos.filter((todo) => { return todo.userId === user.id });
    });
    // console.log('sortTodosByUsers result => ', users);
    return users;

  }

  getUsers(): Observable<any> {
    return this.http.get(USERS_URL);
  }

  getTodos(): Observable<any> {
    return this.http.get(TODOS_URL);
  }
}
