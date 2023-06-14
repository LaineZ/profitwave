import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.scss']
})
export class MainSlideComponent {
  imageBallsX = 0;
  imageBallsY = 0;
  imageRocketY = 0;

  onMouseMove(event: MouseEvent) {
    this.imageRocketY = event.clientY * 0.01;
    this.imageBallsX = event.clientX * -0.01;
    this.imageBallsY = event.clientY * -0.01;
  }
}
