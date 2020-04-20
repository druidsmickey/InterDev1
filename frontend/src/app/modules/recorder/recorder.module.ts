import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { RecorderRoutingModule } from './recorder-routing.module';
import { RecorderComponent } from './page/recorder/recorder.component';

@NgModule({
  declarations: [RecorderComponent],
  imports: [
    RecorderRoutingModule,

    SharedModule
  ]
})

export class RecorderModule {}
