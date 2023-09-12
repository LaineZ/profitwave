import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent {
  imageRocketY = 0;
  imageRocketX = 0;

  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.imageRocketY = event.clientY * 0.01;
    this.imageRocketX = event.clientX * 0.01;
  }
}
