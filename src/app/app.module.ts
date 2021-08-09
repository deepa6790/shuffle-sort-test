import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ShuffleComponent } from './components/shuffle/shuffle.component';
import { SortComponent } from './components/sort/sort.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
	 ShuffleComponent,
    SortComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
