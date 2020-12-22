import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//compo
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';
import { Demo10Component } from './components/demo/demo10/demo10.component';
import { Demo11Component } from './components/demo/demo11/demo11.component';
import { Demo12Component } from './components/demo/demo12/demo12.component';
import { Demo13Component } from './components/demo/demo13/demo13.component';


//serivces
import { ChronoComponent } from './exercices/chrono/chrono.component';
import { AuthGuard } from './components/demo/demo11/services/auth.guard';
import { AuthDemo13Guard } from './components/demo/demo13/services/auth-demo13.guard';
import { Demo14Component } from './components/demo/demo14/demo14.component';
import { Demo15Component } from './components/demo/demo15/demo15.component';
import { Demo16Component } from './components/demo/demo16/demo16.component';
import { Demo17Component } from './components/demo/demo17/demo17.component';
import { Demo18Component } from './components/demo/demo18/demo18.component';
import { Demo19Component } from './components/demo/demo19/demo19.component';
import { Demo20Component } from './components/demo/demo20/demo20.component';
import { Demo21Component } from './components/demo/demo21/demo21.component';
import { Demo22Component } from './components/demo/demo22/demo22.component';
import { Demo23Component } from './components/demo/demo23/demo23.component';

const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'home/:message', component : HomeComponent},
  {path : 'about', component : AboutComponent, canActivate : [AuthDemo13Guard]},
  {path : 'demo', children: [
    {path : 'demo1', component: Demo1Component},
    {path : 'demo3', component: Demo3Component},
    {path : 'demo4', component: Demo4Component},
    {path : 'demo5', component: Demo5Component},
    {path : 'demo6', component: Demo6Component},
    {path : 'demo7', component: Demo7Component},
    {path : 'demo8', component: Demo8Component},
    {path : 'demo9', component: Demo9Component},
    {path : 'demo10', component: Demo10Component},
    {path : 'demo11', component: Demo11Component, canActivate : [AuthGuard]},
    {path : 'demo12', component: Demo12Component},
    {path : 'demo13', component: Demo13Component},
    {path : 'demo14', component: Demo14Component},
    {path : 'demo15', component: Demo15Component},
    {path : 'demo16', component: Demo16Component},
    {path : 'demo17', component: Demo17Component},
    {path : 'demo18', component: Demo18Component},
    {path : 'demo19', component: Demo19Component},
    {path : 'demo20', component: Demo20Component},
    {path : 'demo21', component: Demo21Component},
    {path : 'demo22', component: Demo22Component},
    {path : 'demo23', component: Demo23Component},
  ]},

  {path : 'exercices', children: [
    {path : 'chrono', component: ChronoComponent},
  ]},
  
  {path : 'notfound', component : Demo2Component},
  {path:'**', redirectTo : '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
