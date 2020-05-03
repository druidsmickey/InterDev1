import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/featured/featured.module').then(m => m.FeaturedModule)
      },
      {
        path: 'CCTV',
        loadChildren: () =>
          import('./modules/cctv/cctv.module').then(m => m.CctvModule)
      },
      {
        path: 'Recorder',
        loadChildren: () =>
          import('./modules/recorder/recorder.module').then(m => m.RecorderModule)
      },
      {
        path: 'Alarm',
        loadChildren: () =>
          import('./modules/alarm/alarm.module').then(m => m.AlarmModule)
      },
      {
        path: 'AccessControl',
        loadChildren: () =>
          import('./modules/accesscontrol/accesscontrol.module').then(m => m.AccesscontrolModule)
      },
      {
        path: 'AboutUs',
        loadChildren: () =>
          import('./modules/aboutus/aboutus.module').then(m => m.AboutusModule)
      },
      {
        path: 'ContactUs',
        loadChildren: () =>
          import('./modules/contactus/contactus.module').then(m => m.ContactusModule)
      },
      {
        path: 'Accessory',
        loadChildren: () =>
          import('./modules/accessory/accessory.module').then(m => m.AccessoryModule)
      },
      {
        path: 'AdminComponent',
        loadChildren: () =>
          import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'System',
        loadChildren: () =>
          import('./modules/system/system.module').then(m => m.SystemModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./modules/register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
