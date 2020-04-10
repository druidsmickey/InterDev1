import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './page/aboutus/aboutus.component';

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    AboutusRoutingModule,

    SharedModule
  ]
})

export class AboutusModule {}
