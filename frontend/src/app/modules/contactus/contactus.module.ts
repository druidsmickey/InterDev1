import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './page/contactus/contactus.component';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    ContactusRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class ContactusModule {}
