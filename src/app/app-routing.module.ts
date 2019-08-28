import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'adduser',
    pathMatch:"full"
  },
  {
    path:'adduser',
    component:AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
