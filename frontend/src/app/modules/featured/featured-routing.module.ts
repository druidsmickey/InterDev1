import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedComponent } from './page/featured/featured.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturedRoutingModule {}
