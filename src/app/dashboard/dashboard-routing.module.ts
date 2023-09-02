import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/pages/user.detail/user.detail.component';
import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
    imports: [
        RouterModule.forChild([
                    { path: 'home', component: HomeComponent },
                    { path: 'courses', component: CoursesComponent,},           
                    { path: 'users', component: UsersComponent,
                        loadChildren: () => import ('./pages/users/users.module').then((m) => m.UsersModule)},
                    { path: '**', redirectTo: 'home' },                       
                ]),
            ],
        exports: [RouterModule]           
})
export class DashboardRoutingModule {}