import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private service: DesignutilityService){}

  ngOnInit(): void {
    
    const sourceTech = interval(1000).pipe(map(v => 'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(1000).pipe(map(v => 'Comedy Video #'+ (v+1)),take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #'+ (v+1)),take(4));


    const final = concat(sourceTech, sourceComedy, sourceNews)

    final.subscribe(res => {
      console.log(res);
      this.service.print(res,'elcontainer')
      
    })
    
  }

}
