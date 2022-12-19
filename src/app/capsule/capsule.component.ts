import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map} from 'rxjs';
import { GetCapsulesGQL} from '../services/spacexGraphql.service';


@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CapsuleComponent { 

  page$ : number = 0
  
  //constructor(private getCapsulesPageGQL :GetCapsulesPageGQL ,private route:ActivatedRoute) { }

  //pageCapsules$ = this.route.paramMap.pipe(
    //map((params) => params.get('page') as unknown as number),
    //switchMap((page) => this.getCapsulesPageGQL.fetch({offset:10,limit:10})),
    //map((res) => res.data.capsules)
  //);
  constructor(private getCapsulesGQL :GetCapsulesGQL ) { }

  allCapsules$ = this.getCapsulesGQL
  .fetch()
  .pipe(map((res) => res.data.capsules));
  
  
    

}
  
