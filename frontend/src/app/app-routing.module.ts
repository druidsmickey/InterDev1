import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

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
        path: 'Alarm',
        loadChildren: () =>
          import('./modules/alarm/alarm.module').then(m => m.AlarmModule)
      },
      {
        path: 'AccessControl',
        loadChildren: () =>
          import('./modules/accesscontrol/accesscontrol.module').then(m => m.AccesscontrolModule)
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
