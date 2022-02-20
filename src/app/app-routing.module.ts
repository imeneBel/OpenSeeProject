import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './components/users-details/users-details.component';

const routes: Routes = [
  { path: 'users', component: UsersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
