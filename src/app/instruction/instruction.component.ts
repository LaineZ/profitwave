import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {
  @Input() image = "";
  @Input() stepNumber = 1;
  @Input() first = false;
  @Input() stepDescription = "";
}
