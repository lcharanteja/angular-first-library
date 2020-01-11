import { NgModule } from '@angular/core';
import { FirstLibComponent } from './first-lib.component';
import { CommonModule } from '@angular/common';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [FirstLibComponent, CommonDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FirstLibComponent]
})
export class FirstLibModule { }
