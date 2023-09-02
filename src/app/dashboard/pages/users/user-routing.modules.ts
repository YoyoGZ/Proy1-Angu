import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './pages/user.detail/user.detail.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
    imports: [CommonModule,
              RouterModule.forChild([
                    { path: ':id', component: UserDetailComponent,},
                    { path: 'students',component: StudentsComponent,
                        loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),},                       
                    { path: 'teachers', component: TeachersComponent,
                        loadChildren: () => import('./teachers/teachers.module').then((m) => m.TeacherModule),},
                  ]),
              ],
              exports: [RouterModule]           
    })
export class UserRoutingModule {}