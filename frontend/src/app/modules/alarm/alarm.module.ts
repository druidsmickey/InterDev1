import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AlarmRoutingModule } from './alarm-routing.module';
import { AlarmComponent } from './page/alarm/alarm.component';

@NgModule({
  declarations: [AlarmComponent],
  imports: [
    AlarmRoutingModule,

    SharedModule
  ]
})

export class AlarmModule {}
