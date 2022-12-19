import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './capsule/capsule.component';
import { MissionComponent } from './mission/mission.component';
import { LaunchComponent } from './launch/launch.component';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = [
  {
    path:'capsules',
    component:CapsuleComponent
  },
  {
    path:'missions',
    component:MissionComponent
  },
  {
    path:'launchs',
    component:LaunchComponent
  },
  {
    path:'ships',
    component:ShipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
