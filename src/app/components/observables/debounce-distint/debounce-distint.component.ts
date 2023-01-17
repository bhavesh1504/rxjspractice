import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, fromEvent, map, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-debounce-distint',
  templateUrl: './debounce-distint.component.html',
  styleUrls: ['./debounce-distint.component.scss']
})
export class DebounceDistintComponent implements OnInit, AfterViewInit {

  @ViewChild('input') myInput!:ElementRef 
  reqData:any;
  @ViewChild('inputs') myInputs!:ElementRef 
  reqDatas:any;

  constructor(private loadingbar: LoadingBarService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngAfterViewInit(): void {

    // Ex 01 Debounce Time
    
  const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
    map(event => event!.target.value),
    debounceTime(1000)
  )
  searchTerm.subscribe(res => {
    console.log(res);
    this.reqData  = res;
    this.loadingbar.start();

    setTimeout(()=> {
      this.reqData = null;
      this.loadingbar.stop();
    },1000);
    
  })

      // Ex 02 Distint Until Change
    
      const searchTerms = fromEvent<any>(this.myInputs.nativeElement, 'keyup').pipe(
        map(event => event!.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      searchTerms.subscribe(res => {
        console.log(res);
        this.reqDatas  = res;
        this.loadingbar.start();
    
        setTimeout(()=> {
          this.reqDatas = null;
          this.loadingbar.stop();
        },1000);
        
      })
    

  }


}
