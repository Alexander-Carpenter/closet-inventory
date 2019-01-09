import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { MyOutfitComponent } from './my-outfit/my-outfit.component';
import { MyClosetComponent } from './my-closet/my-closet.component';
import { SettingsComponent } from './settings/settings.component';
import { MyLaundryComponent } from './my-laundry/my-laundry.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from '../core';

@NgModule({
  declarations: [
    MyOutfitComponent,
    MyClosetComponent,
    MyLaundryComponent,
    SettingsComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ]
})
export class FeaturesModule { }
