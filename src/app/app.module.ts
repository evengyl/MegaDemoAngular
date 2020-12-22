import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts'

//nebular
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbButtonModule, NbInputModule, NbCheckboxModule, NbAlertModule, NbUserModule, NbListModule, NbSelectModule, NbDatepickerModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

//compo
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { Demo14Component } from './components/demo/demo14/demo14.component';
import { Demo15Component } from './components/demo/demo15/demo15.component';
import { Demo16Component } from './components/demo/demo16/demo16.component';
import { Demo17Component } from './components/demo/demo17/demo17.component';
import { Demo18Component } from './components/demo/demo18/demo18.component';
import { Demo19Component } from './components/demo/demo19/demo19.component';
import { Demo20Component } from './components/demo/demo20/demo20.component';
import { Demo21Component } from './components/demo/demo21/demo21.component';
import { Demo22Component } from './components/demo/demo22/demo22.component';

//exos
import { ChronoComponent } from './exercices/chrono/chrono.component';

//services
import { HighlightDirective } from './components/demo/demo8/AttributDirective/highlight.directive';
import { PrepareRenderDirective } from './components/demo/demo8/AttributDirective/prepare-render.directive';
import { AuthGuard } from './components/demo/demo11/services/auth.guard';
import { CustomPipePipe } from './components/demo/demo5/custom-pipe.pipe';
import { AuthService9 } from './components/demo/demo9/services/auth.service';
import { AuthService10 } from './components/demo/demo10/services/auth.service';
import { AuthService13 } from './components/demo/demo13/services/auth.service';
import { AuthDemo13Guard } from './components/demo/demo13/services/auth-demo13.guard';

import { ApiService } from './components/demo/demo16/services/api.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertComponent } from './components/demo/demo18/alert/alert.component';
import { ConfirmBoxComponent } from './components/demo/demo19/Shared/confirm-box/confirm-box.component';

import { ApiBackEndService } from './components/demo/demo16/services/api-back-end.service'
import { TestNodeService } from './components/demo/demo16/services/test-node.service';
import { Demo23Component } from './components/demo/demo23/demo23.component'

//models


export function HttpLoaderFactory(http : HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    ChronoComponent,
    CustomPipePipe,
    HighlightDirective,
    PrepareRenderDirective,
    Demo11Component,
    Demo12Component,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    Demo16Component,
    Demo17Component,
    Demo18Component,
    Demo19Component,
    Demo20Component,
    Demo21Component,
    Demo22Component,
    AlertComponent,
    ConfirmBoxComponent,
    Demo23Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    FormsModule,
    NbAlertModule,
    NbListModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      },
      defaultLanguage: "fr"
    })
  ],
  providers: [
    AuthService9,
    AuthService10,
    AuthService13,
    AuthGuard,
    AuthDemo13Guard,
    ApiService,
    ApiBackEndService,
    TestNodeService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
