import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class RegisterModule {}
