import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slide-subscribe',
  templateUrl: './slide-subscribe.component.html',
  styleUrls: ['./slide-subscribe.component.scss']
})
export class SlideSubscribeComponent {
  public backgroundPosition: string = '0% 5%, 100% 100%';
  private scrollSpeed: number = 10;

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    this.backgroundPosition = `0% calc(-60% + ${scrollPosition / this.scrollSpeed}px), 100% calc(20% + ${scrollPosition / this.scrollSpeed}px)`;
  }
}
