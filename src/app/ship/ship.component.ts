import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetShipsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent {

  
  constructor(private getShipsGQL :GetShipsGQL) { }

  allShips$ = this.getShipsGQL
  .fetch()
  .pipe(map((res) => res.data.ships));

}
