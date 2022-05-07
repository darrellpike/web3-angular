import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export enum MotivatorTypes {
  Bid = 0,
  Buy,
}

@Component({
  selector: 'app-dialog-login-motivator',
  templateUrl: './dialog-login-motivator.component.html',
  styleUrls: ['./dialog-login-motivator.component.scss'],
})
export class DialogLoginMotivatorComponent {
  MotivatorTypes = MotivatorTypes;
  @Input() type: MotivatorTypes = MotivatorTypes.Bid;

  constructor(
    private modal: NgbActiveModal,
  ) { }

  close() {
    this.modal.dismiss(true);
  }
}
