import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CoreModule } from '../core/core.module';
import { MyOutfitComponent } from './my-outfit/my-outfit.component';
import { MyClosetComponent } from './my-closet/my-closet.component';
import { SettingsComponent } from './settings/settings.component';
import { MyLaundryComponent } from './my-laundry/my-laundry.component';

@NgModule({
  declarations: [
    MyOutfitComponent, 
    MyClosetComponent, 
    MyLaundryComponent, 
    SettingsComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ]
})
export class FeaturesModule { }
