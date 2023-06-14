import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.scss']
})
export class MainSlideComponent {
  imageRocketTop = 0;
  imageBallsTop = 0;
  imageRocketRight = 0;

  onMouseMove(event: MouseEvent) {
    this.imageRocketTop = event.clientY * 0.01;
    this.imageRocketRight = event.clientX * 0.01;
    this.imageBallsTop = event.clientY * -0.02;
  }
}
