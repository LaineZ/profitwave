import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slide-subscribe',
  templateUrl: './slide-subscribe.component.html',
  styleUrls: ['./slide-subscribe.component.scss']
})
export class SlideSubscribeComponent {
  imageX = 0;
  imageY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.imageY = event.clientY * 0.05;
    this.imageX = event.clientX * -0.05;
  }
}
