import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './page/contactus/contactus.component';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    ContactusRoutingModule,

    SharedModule
  ]
})

export class ContactusModule {}
