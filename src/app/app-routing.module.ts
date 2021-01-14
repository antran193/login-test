import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenGuard } from './service/authen.guard';

const routes: Routes = [
  {
    path : '' , component : AppComponent, canActivate : [AuthenGuard]
  },
  {
    path : '/login' , component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
