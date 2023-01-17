import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { concatMap } from 'rxjs';
import { ConcatmapComponent } from './components/observables/concatmap/concatmap.component';
import { DebounceDistintComponent } from './components/observables/debounce-distint/debounce-distint.component';
import { FilterComponent } from './components/observables/filter/filter.component';
import { ListComponent } from './components/observables/list/list.component';
import { MapComponent } from './components/observables/map/map.component';
import { MergemapComponent } from './components/observables/mergemap/mergemap.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { TapComponent } from './components/observables/tap/tap.component';
import { PromiseComponent } from './components/promise/promise.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  // {path:'header',component:HeaderComponent}
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservablesComponent,children:[
    {path:'',component:ListComponent},
    {path:'map',component:MapComponent},
    {path:'tap',component:TapComponent},
    {path:'filter',component:FilterComponent},
    {path:'debounce&distint',component:DebounceDistintComponent},
    {path:'concatmap',component:ConcatmapComponent},
    {path:'mergemap',component:MergemapComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
