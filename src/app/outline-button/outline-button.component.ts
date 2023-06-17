import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent {
  @Input() href: string = "";
}
