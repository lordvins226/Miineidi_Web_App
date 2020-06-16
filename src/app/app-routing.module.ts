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
        { path: 'Home', component: HomeComponent },
        { path: 'About', component: AboutComponent },
        { path: '',   redirectTo: '/Home', pathMatch: 'full' },
      // { path: '**', component: HomeComponent },
        
    ]
},

{
    path: 'admin',
    component: AdminLayoutComponent,
    children : [
      { path: '', component: LoginComponent},
    ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
