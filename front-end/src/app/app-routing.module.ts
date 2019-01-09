import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core';
import {
  MyOutfitComponent,
  MyClosetComponent,
  MyLaundryComponent,
  SettingsComponent,
  NotFoundComponent,
  LoginComponent
} from './features';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-outfit'
      },
      {
        path: 'my-outfit',
        component: MyOutfitComponent
      },
      {
        path: 'my-closet',
        component: MyClosetComponent
      },
      {
        path: 'my-laundry',
        component: MyLaundryComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
