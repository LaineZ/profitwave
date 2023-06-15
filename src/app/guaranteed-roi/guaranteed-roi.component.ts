import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guaranteed-roi-component',
  templateUrl: './guaranteed-roi.component.html',
  styleUrls: ['./guaranteed-roi.component.scss']
})
export class GuaranteedRoiComponent {
  @Input() alternate = false;
  @Input() heading = "";
  @Input() description = "";
  @Input() topHeading = "";
  @Input() imageUrl = "";
}
