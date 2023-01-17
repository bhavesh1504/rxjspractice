import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignutilityService } from 'src/app/designutility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  myColor:string='';
  constructor(private service: DesignutilityService){}
  ngOnInit(): void {
  const source = interval(1000)

  //Ex 01

  const arr = ['vinit','priya','tushi','kunal','pinky','sunanda']
  let obsSubscription: Subscription;

  obsSubscription = source.pipe(
    tap(res=>{
      console.log('tap before =>' + res);
      if(res==4){
        obsSubscription.unsubscribe();
      }
    }),
    map(res => arr[res]),
    tap(res => console.log('tap after => '+res))
  ).subscribe(res => {
    console.log(res);
    this.service.print(res,'elContainer')
    
  })

  //Ex 02

  const array = ['purple','blue','orange','yellow','brown','green','lightpink']
  let obsSubscription1: Subscription;

  obsSubscription1 = source.pipe(
    tap(res=>{
      this.myColor = array[res]
      console.log('tap before =>' + res);
      if(res==7){
        obsSubscription1.unsubscribe();
      }
    }),
    map(res => array[res]),
    tap(res => console.log('tap after => '+res))
  ).subscribe(res => {
    console.log(res);
    this.service.print(res,'elContainer2')
    
  })
    
  }
}
