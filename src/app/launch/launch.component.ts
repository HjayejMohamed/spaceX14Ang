import { Component, OnInit } from '@angular/core';
import { GetLunchesGQL  } from '../services/spacexGraphql.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent {

  constructor(private getLaunchsGQL :GetLunchesGQL) { }

  allLaunchs$ = this.getLaunchsGQL
  .fetch()
  .pipe(map((res) => res.data.launches));

}
