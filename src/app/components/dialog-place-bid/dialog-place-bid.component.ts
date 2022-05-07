import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NftItem } from '@app/datatypes/nft-item';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-place-bid',
  templateUrl: './dialog-place-bid.component.html',
  styleUrls: ['./dialog-place-bid.component.scss'],
})
export class DialogPlaceBidComponent {

  @Input() nft!: NftItem;

  bidForm = new FormGroup({
    bid: new FormControl(null, [Validators.required]),
  });

  constructor(
    private modal: NgbActiveModal,
  ) { }

  cancel() {
    this.modal.dismiss(ModalDismissReasons.ESC);
  }

  placeBid() {
    if (this.bidForm.invalid) return;

    this.modal.close(this.bidForm.value);
  }
}
