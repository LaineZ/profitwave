import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minimum-drawdown',
  templateUrl: './minimum-drawdown.component.html',
  styleUrls: ['./minimum-drawdown.component.scss']
})
export class MinimumDrawdownComponent {
  @Input() heading = "";
  @Input() description = "";
  @Input() topHeading = "";
  @Input() imageUrl = "";
}
