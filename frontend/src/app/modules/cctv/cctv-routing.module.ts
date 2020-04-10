import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CctvComponent } from './page/cctv/cctv.component';

const routes: Routes = [
  {
    path: '',
    component: CctvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CctvRoutingModule {}
