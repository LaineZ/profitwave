import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { SlideFollowComponent } from './slide-follow/slide-follow.component';
import { SlideHowCopyTradesComponent } from './slide-how-copy-trades/slide-how-copy-trades.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    MainSlideComponent,
    SlideFollowComponent,
    SlideHowCopyTradesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
