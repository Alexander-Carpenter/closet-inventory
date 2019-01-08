import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HeaderComponent } from './layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
