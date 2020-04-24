import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AccessoryRoutingModule } from './accessory-routing.module';
import { AccessoryComponent } from './page/accessory/accessory.component';

@NgModule({
  declarations: [AccessoryComponent],
  imports: [
    AccessoryRoutingModule,

    SharedModule
  ]
})

export class AccessoryModule {}
