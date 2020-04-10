import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesscontrolComponent } from './page/accesscontrol/accesscontrol.component';

const routes: Routes = [
  {
    path: '',
    component: AccesscontrolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccesscontrolRoutingModule {}
