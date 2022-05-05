import { Injectable } from '@angular/core';
import Web3 from 'web3';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import { BehaviorSubject, defer, from } from 'rxjs';
import { Web3ModalService } from '@mindsorg/web3modal-angular';


@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private web3!: Web3;
  // private provider: any;
  private accountsSource = new BehaviorSubject<string[]>([]);
  accounts$ = this.accountsSource.asObservable();

  constructor(
    private web3ModalService: Web3ModalService,
  ) {}

  getAccounts() { return this.accountsSource.value; }

  connectAccount() {
    return defer(() => from(
      (async () => {
        const provider = await this.web3ModalService.open();
        if (provider) {
          this.web3 = new Web3(provider as any);
          // console.log('w3', this.web3);

          const accounts = await this.web3.eth.getAccounts();
          this.accountsSource.next(accounts);
        }
      })(),
    ));
  }

  accountInfo(address: string) {
    return defer(() => from(
      (async () => {
        // DEMO
        const initialvalue = await this.web3.eth.getBalance(address);
        const balance = this.web3.utils.fromWei(initialvalue, 'ether');
        return { balance };
      })(),
    ));
  }
}
