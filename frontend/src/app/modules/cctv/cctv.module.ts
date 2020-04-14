import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { CctvRoutingModule } from './cctv-routing.module';
import { CctvComponent } from './page/cctv/cctv.component';

@NgModule({
  declarations: [CctvComponent],
  imports: [
    CctvRoutingModule,

    SharedModule
  ]
})

export class CctvModule {}
