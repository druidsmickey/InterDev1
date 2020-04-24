import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessoryComponent } from './page/accessory/accessory.component';

const routes: Routes = [
  {
    path: '',
    component: AccessoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccessoryRoutingModule {}
