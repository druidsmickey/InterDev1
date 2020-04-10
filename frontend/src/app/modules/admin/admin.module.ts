import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './page/admin.component';
import { ItemsComponent } from './page/items/items.component';

@NgModule({
  declarations: [AdminComponent, ItemsComponent],
  imports: [
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class AdminModule {}
