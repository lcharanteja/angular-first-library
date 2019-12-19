import { NgModule } from '@angular/core';
import { FirstLibComponent } from './first-lib.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FirstLibComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstLibComponent]
})
export class FirstLibModule { }
