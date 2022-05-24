import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

import { ContractService } from '@services/contract.service';

import { Account } from '@datatypes/account';
import { NftItem } from '@app/datatypes/nft-item';


@UntilDestroy()
@Component({
  selector: 'app-dialog-buy-now',
  templateUrl: './dialog-buy-now.component.html',
  styleUrls: ['./dialog-buy-now.component.scss'],
})
export class DialogBuyNowComponent implements OnInit, OnDestroy {
  userAccounts: Account[] = [];
  nftItem!: NftItem;
  serviceFeePercent = 2.5;
  serviceFee = 0;
  totalPrice: number = 0;
  enoughFunds = false;
  private pricePrecision = 6;

  form = new FormGroup({
    account: new FormControl(null, [Validators.required]),
  });

  @Input() set nft(val: NftItem) {
    this.nftItem = val;
    this.calc();
  }

  constructor(
    private modal: NgbActiveModal,
    private contractService: ContractService,
  ) { }

  ngOnInit(): void {
    this.form.get('account')?.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((accId: string) => {
        let balance = 0;
        const account = this.userAccounts.find(acc => acc.id === accId);

        if (account) {
          balance = +account.balance;
        }

        this.enoughFunds = (balance >= this.totalPrice);
      });

    // after! account.valueChanges
    this.contractService.accounts$
      .pipe(untilDestroyed(this))
      .subscribe((accounts) => {
        this.userAccounts = accounts;
        this.form.get('account')?.patchValue(this.userAccounts[0].id);
      });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnDestroy(): void {}

  private round(val: number): number {
    const pow = Math.pow(10, this.pricePrecision);
    return Math.round(val * pow) / pow;
  }

  calc() {
    if (!this.nftItem) return;

    this.serviceFee = this.round(this.nftItem.price * this.serviceFeePercent / 100);
    this.totalPrice = this.round(this.nftItem.price + this.serviceFee);
  }

  cancel() {
    this.modal.dismiss(ModalDismissReasons.ESC);
  }

  buy() {
    // now not clear how it will work
    // TODO:
  }

  connectWallet() {
    this.contractService.connectAccount().subscribe(() => {});
  }
}
