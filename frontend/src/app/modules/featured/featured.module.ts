import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './page/featured/featured.component';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [
    FeaturedRoutingModule,

    SharedModule
  ]
})

export class FeaturedModule { }
