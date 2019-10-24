import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'projectlist/:empid',
    component: ProjectListComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
