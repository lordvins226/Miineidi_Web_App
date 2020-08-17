import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children : [
        { path: '', component: HomeComponent ,pathMatch: 'full'},
        { path: 'About', component: AboutComponent },      
    ]
},

{
    path: '',
    component: AdminLayoutComponent,
    children : [
      { path: 'Login', component: LoginComponent},
    ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
