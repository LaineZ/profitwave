import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent {
  imageBallsX = 0;
  imageBallsY = 0;
  imageRocketY = 0;

  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.imageRocketY = event.clientY * 0.01;
    this.imageBallsX = event.clientX * -0.02;
    this.imageBallsY = event.clientY * -0.01;
  }
}
