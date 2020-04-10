import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AccesscontrolRoutingModule } from './accesscontrol-routing.module';
import { AccesscontrolComponent } from './page/accesscontrol/accesscontrol.component';

@NgModule({
  declarations: [AccesscontrolComponent],
  imports: [
    AccesscontrolRoutingModule,

    SharedModule
  ]
})

export class AccesscontrolModule {}
