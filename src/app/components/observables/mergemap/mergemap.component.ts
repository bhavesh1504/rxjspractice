import { Component } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent {

  constructor(private service: DesignutilityService){}

  ngOnInit(): void {
    
    const sourceTech = interval(2000).pipe(map(v => 'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(5000).pipe(map(v => 'Comedy Video #'+ (v+1)),take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #'+ (v+1)),take(4));


    const final = merge(sourceTech, sourceComedy, sourceNews)

    final.subscribe(res => {
      console.log(res);
      this.service.print(res,'elcontainer')
      
    })
    
  }

}
