import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CctvComponent } from './cctv/cctv.component';
import { AlarmComponent } from './alarm/alarm.component';
import { FeaturedComponent } from './featured/featured.component';
import { AccesscontrolComponent } from './accesscontrol/accesscontrol.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppPipe } from './app.pipe';
import { UseraccountsComponent } from './useraccounts/useraccounts.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CctvComponent,
    AlarmComponent,
    FeaturedComponent,
    AccesscontrolComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    AdminComponent,
    AppPipe,
    UseraccountsComponent,
    ItemsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
