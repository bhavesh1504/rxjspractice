import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ListComponent } from './components/observables/list/list.component';
import { MapComponent } from './components/observables/map/map.component';
import { TapComponent } from './components/observables/tap/tap.component';
import { FilterComponent } from './components/observables/filter/filter.component';
import { DebounceDistintComponent } from './components/observables/debounce-distint/debounce-distint.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MergemapComponent } from './components/observables/mergemap/mergemap.component';
import { ConcatmapComponent } from './components/observables/concatmap/concatmap.component';
import { HostbindingDirective } from './components/observables/hostbinding.directive';
import { TestComponent } from './components/observables/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservablesComponent,
    ListComponent,
    MapComponent,
    TapComponent,
    FilterComponent,
    DebounceDistintComponent,
    MergemapComponent,
    ConcatmapComponent,
    HostbindingDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
