import { Component, OnInit } from '@angular/core';
import {  GetMissionsGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent  {

  constructor(private getMissionsGQL :GetMissionsGQL ) { }

  allMissions$ = this.getMissionsGQL
  .fetch()
  .pipe(map((mes) => mes.data.missions));

}
