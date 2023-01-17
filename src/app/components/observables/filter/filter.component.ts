import { Component, OnInit } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id:1,name:'Bhavesh',gender:'Male'},
    {id:2,name:'Priya',gender:'Female'},
    {id:3,name:'Jay',gender:'Male'},
    {id:4,name:'Surya',gender:'Female'},
    {id:5,name:'Suraj',gender:'Male'},
    {id:6,name:'Kunal',gender:'Male'},
    {id:7,name:'Moni',gender:'Female'},
    {id:8,name:'Tushar',gender:'Male'}
  ]

  data:any;
  data1:any;
  data2:any;

  constructor(){}

  ngOnInit(): void {
   
    const source = from(this.dataArr)

    // Ex-01

    source.pipe(
      filter(member => member.name.length > 5),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data = res; 
    })

    // Ex-02

    source.pipe(
      filter(member => member.gender == 'Male'),
      toArray()
      // map(res => res)
    ).subscribe(res => {
      console.log(res);
      this.data1 = res; 
    })

     // Ex-03

     source.pipe(
      filter(member => member.id <=4),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res; 
    })
    
    
  }

}
