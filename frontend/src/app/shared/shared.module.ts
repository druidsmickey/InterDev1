import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
   	CommonModule,
  	MatButtonModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatTabsModule,
  	MatTableModule,
  	MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule
  ]
})

export class SharedModule {}
