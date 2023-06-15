import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { SlideFollowComponent } from './slide-follow/slide-follow.component';
import { SlideHowCopyTradesComponent } from './slide-how-copy-trades/slide-how-copy-trades.component';
import { InstructionComponent } from './instruction/instruction.component';
import { SlideRoiComponent } from './slide-roi/slide-roi.component';
import { GuaranteedRoiComponent } from './guaranteed-roi/guaranteed-roi.component';
import { MinimumDrawdownComponent } from './minimum-drawdown/minimum-drawdown.component';
import { RocketComponent } from './rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    MainSlideComponent,
    SlideFollowComponent,
    SlideHowCopyTradesComponent,
    InstructionComponent,
    SlideRoiComponent,
    GuaranteedRoiComponent,
    MinimumDrawdownComponent,
    RocketComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
