import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {
  @Input() image = "";
  @Input() stepNumber = 1;
  @Input() stepDescription = "";
}
