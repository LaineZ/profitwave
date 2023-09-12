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
import { SlideSubscribeComponent } from './slide-subscribe/slide-subscribe.component';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { CryptoscrollComponent } from './cryptoscroll/cryptoscroll.component';
import { FollowHeaderComponent } from './follow-header/follow-header.component';
import { LineComponent } from './line/line.component';

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
    SlideSubscribeComponent,
    OutlineButtonComponent,
    CryptoscrollComponent,
    FollowHeaderComponent,
    LineComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
