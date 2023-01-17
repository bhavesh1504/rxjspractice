import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1: Subscription = new Subscription;
  msg1:any
  sub2: Subscription = new Subscription;
  msg2:any
  msg3:any

  constructor(private service: DesignutilityService) {}

  ngOnInit(): void {
  
    
    
    const broadCastVideos =  interval(1000);

    //Ex - 01

    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video ' + data)
        
    ).subscribe(res => {
      this.msg1 = res
      
    });

    setTimeout(()=>{
      this.sub1.unsubscribe()
    },10000)

    //Ex - 02

    this.sub2 = broadCastVideos.pipe(
      map(data => data * 10)

    ).subscribe(res => {
      this.msg2 = res
    });

    setTimeout(()=>{
      this.sub2.unsubscribe()
    },10000)

    //Ex - 03

    const members = from([
      {id:1,name:'vinit'},
      {id:2,name:'piyu'},
      {id:3,name:'jay'},
      {id:4,name:'suraj'},
      {id:5,name:'tushi'},
      {id:6,name:'kunal'}
    ])

    members.pipe(
      map(data => data.name)
    ).subscribe(res => {
      this.msg3 = res;
      console.log(this.msg3)
      this.service.print(res,'elContainer')
    })

  }

}
