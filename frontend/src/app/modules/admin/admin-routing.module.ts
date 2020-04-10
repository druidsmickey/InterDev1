import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './page/admin.component';
import { ItemsComponent } from './page/items/items.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'ItemsComponent',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
