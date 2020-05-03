import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './page/system/system.component';

@NgModule({
  declarations: [SystemComponent],
  imports: [
    SystemRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class SystemModule {}
