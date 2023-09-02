import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {  // users/teachers/
        path: '',component: TeachersComponent }
  ])
],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
