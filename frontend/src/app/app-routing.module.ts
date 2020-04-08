import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CctvComponent } from './cctv/cctv.component';
import { AlarmComponent } from './alarm/alarm.component';
import { FeaturedComponent } from './featured/featured.component';
import { AccesscontrolComponent } from './accesscontrol/accesscontrol.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UseraccountsComponent } from './useraccounts/useraccounts.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
	{path:'', component: FeaturedComponent}
	,
	{path:'CCTV', component: CctvComponent}
	,
	{path:'Alarm', component: AlarmComponent}
	,
	{path:'AccessControl', component: AccesscontrolComponent}
	,
	{path:'AboutUs', component: AboutusComponent}
	,
	{path:'ContactUs', component: ContactusComponent}
	,
	{path:'LoginComponent', component: LoginComponent}
	,
	{path:'AdminComponent', component: AdminComponent,
		children: [
			{path:'UserAccountsComponent', component: UseraccountsComponent},
			{path:'ItemsComponent', component: ItemsComponent}

		]
	}
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
