import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal:any

  constructor() {}

  dellAvailabe(){
    return false;
  }

  hpAvailable(){
    return false;
  }

  notAvailabe(){
    return true;
  }
  
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve,reject)=>{
      if(this.dellAvailabe()){
        resolve('Dell is Purchased')
      }
      else if(this.hpAvailable()){
        resolve('Hp is purchased')
      }
      else{
        reject('Laptop is not available')
      }
    });
    buyLaptop.then(res=>{
      console.log('then code =>', res);
      this.promiseVal = res;
    }).catch(res=>{
      console.log('catch code =>', res);
      this.promiseVal = res;
    })
      
  
      
    
  }

}
