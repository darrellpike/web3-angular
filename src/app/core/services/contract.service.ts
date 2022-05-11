/*
  I'm sorry if something works not smooth here.
  I had very common tasks from client so it was not clear how to implement features.
*/
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import {
  AddAccount, EncryptedKeystoreV3Json, LogsOptions, provider, TransactionConfig,
} from 'web3-core';
import { ContractOptions } from 'web3-eth-contract';
import { AbiItem, AbiInput, Hex, Unit } from 'web3-utils';
import {
  PostWithSymKey, PostWithPubKey, SubscriptionOptions,
} from 'web3-shh';
import * as BN from 'bn.js';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import { BehaviorSubject, defer, forkJoin, from, Observable } from 'rxjs';
import { Web3ModalService } from '@mindsorg/web3modal-angular';
import { Account } from '@datatypes/account';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private web3!: Web3;
  // private provider: any;
  private accountsSource = new BehaviorSubject<Account[]>([]);
  accounts$ = this.accountsSource.asObservable();

  constructor(
    private web3ModalService: Web3ModalService,
  ) {}

  getAccounts() { return this.accountsSource.value; }

  /* template to convert async/promise-based code to subscribable
    defer -> from -> async code it's correct scheme

  tpl() {
    return defer(() => from((async () => {
      // code here
    })()));
  }
  */

  connectAccount() {
    return defer(() => from((async () => {
      const prov = await this.web3ModalService.open() as provider;
      if (prov) {
        this.web3 = new Web3(prov);

        const accounts = await this.web3.eth.getAccounts();

        forkJoin(
          accounts.map((accId) => this.accountInfo(accId)),
        ).subscribe((data) => {
          this.accountsSource.next(data);
        });
      }
    })()));
  }

  disconnectAccount() {
    this.accountsSource.next([]);
  }

  accountInfo(address: string) {
    return defer(() => from((async () => {
      // DEMO: get balance for each account
      const initialvalue = await this.web3.eth.getBalance(address);
      const balance = this.web3.utils.fromWei(initialvalue, 'ether');

      const acc: Account = {
        id: address,
        balance,
      };
      return acc;
    })()));
  }

  ethSubscribeLogs(options: LogsOptions) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.subscribe('logs', options);
      return res;
    })()));
  }

  ethSubscribeSyncing() {
    return defer(() => from((async () => {
      const res = await this.web3.eth.subscribe('syncing');
      return res;
    })()));
  }

  ethSubscribePendingTransactions() {
    return defer(() => from((async () => {
      const res = await this.web3.eth.subscribe('pendingTransactions');
      return res;
    })()));
  }

  ethSubscribeNewBlockHeaders() {
    return defer(() => from((async () => {
      const res = await this.web3.eth.subscribe('newBlockHeaders');
      return res;
    })()));
  }

  ethClearSubscriptions() {
    return new Observable<boolean>((subscriber) => {
      this.web3.eth.clearSubscriptions( (error: Error, result: boolean) => {
        if (result) {
          subscriber.next(true);
          subscriber.complete();
        } else {
          subscriber.error(error);
        }
      });
    });
  }

  // eth accounts
  ethAccountCreate() {
    this.web3.eth.accounts.create();
  }

  ethAccountSignTransaction(transactionConfig: TransactionConfig, privateKey: string) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.accounts.signTransaction(transactionConfig, privateKey);

      return res;
    })()));
  }

  ethAccountRecoverTransaction(signature: string) {
    return this.web3.eth.accounts.recoverTransaction(signature);
  }

  ethAccountHashMessage(msg: string) {
    return this.web3.eth.accounts.hashMessage(msg);
  }

  ethAccountSign(data: string, privateKey: string) {
    return this.web3.eth.accounts.sign(data, privateKey);
  }

  ethAccountEncrypt(privateKey: string, password: string) {
    return this.web3.eth.accounts.encrypt(privateKey, password);
  }

  ethAccountDecrypt(keystoreJsonV3: EncryptedKeystoreV3Json, password: string) {
    return this.web3.eth.accounts.decrypt(keystoreJsonV3, password);
  }

  ethAccountWalletCreate(numberOfAccounts: number, entropy?: string) {
    return this.web3.eth.accounts.wallet.create(numberOfAccounts, entropy);
  }

  ethAccountWalletAdd(account: string | AddAccount) {
    return this.web3.eth.accounts.wallet.add(account);
  }

  ethAccountWalletRemove(account: string | number) {
    return this.web3.eth.accounts.wallet.remove(account);
  }

  ethAccountWalletClear() {
    return this.web3.eth.accounts.wallet.clear();
  }

  ethAccountWalletEncrypt(password: string) {
    return this.web3.eth.accounts.wallet.encrypt(password);
  }

  ethAccountWalletDecrypt(keystoreArray: EncryptedKeystoreV3Json[], password: string) {
    return this.web3.eth.accounts.wallet.decrypt(keystoreArray, password);
  }

  ethAccountWalletSave(password: string, keyName?: string) {
    return this.web3.eth.accounts.wallet.save(password, keyName);
  }

  ethAccountWalletLoad(password: string, keyName?: string) {
    return this.web3.eth.accounts.wallet.load(password, keyName);
  }

  // eth contract
  ethNewContract(jsonInterface: AbiItem | AbiItem[], address?: string, options?: ContractOptions) {
    return new this.web3.eth.Contract(jsonInterface, address, options);
  }


  // eth personal
  ethPersonalSign(dataToSign: string, address: string, password: string) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.personal.sign(dataToSign, address, password);

      return res;
    })()));
  }

  ethPersonalSignTransaction(transactionConfig: TransactionConfig, password: string) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.personal.signTransaction(transactionConfig, password);

      return res;
    })()));
  }

  ethPersonalSendTransaction(transactionConfig: TransactionConfig, password: string) {
    return this.web3.eth.personal.sendTransaction(transactionConfig, password);
  }

  ethPersonalUnlockAccount(address: string, password: string, unlockDuration: number) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.personal.unlockAccount(address, password, unlockDuration);

      return res;
    })()));
  }

  ethPersonalLockAccount(address: string) {
    return defer(() => from((async () => {
      const res = await this.web3.eth.personal.lockAccount(address);

      return res;
    })()));
  }

  ethPersonalGetAccounts() {
    return defer(() => from((async () => {
      const res = await this.web3.eth.personal.getAccounts();

      return res;
    })()));
  }

  // eth abi
  ethAbiEncodeFunctionSignature(functionName: string | AbiItem) {
    return this.web3.eth.abi.encodeFunctionSignature(functionName);
  }

  ethAbiEncodeEventSignature(functionName: string | AbiItem) {
    return this.web3.eth.abi.encodeEventSignature(functionName);
  }

  ethAbiEncodeParameter(type: any, parameter: any) {
    return this.web3.eth.abi.encodeParameter(type, parameter);
  }

  ethAbiEncodeParameters(types: any[], paramaters: any[]) {
    return this.web3.eth.abi.encodeParameters(types, paramaters);
  }

  ethAbiEncodeFunctionCall(abiItem: AbiItem, params: string[]) {
    return this.web3.eth.abi.encodeFunctionCall(abiItem, params);
  }

  ethAbiDecodeParameter(type: any, hex: string) {
    return this.web3.eth.abi.decodeParameter(type, hex);
  }

  ethAbiDecodeParameters(types: any[], hex: string) {
    return this.web3.eth.abi.decodeParameters(types, hex);
  }

  ethAbiDecodeLog(inputs: AbiInput[], hex: string, topics: string[]) {
    return this.web3.eth.abi.decodeLog(inputs, hex, topics);
  }

  netGetId() {
    return defer(() => from((async () => {
      const res = await this.web3.eth.net.getId();
      return res;
    })()));
  }

  netIsListening() {
    return defer(() => from((async () => {
      const res = this.web3.eth.net.isListening();

      return res;
    })()));
  }

  netGetPeerCount() {
    return defer(() => from((async () => {
      const res = this.web3.eth.net.getPeerCount();

      return res;
    })()));
  }

  bzzSetProvider(prov: any) {
    return this.web3.bzz.setProvider(prov);
  }

  bzzGetGivenProvider() {
    return this.web3.bzz.givenProvider;
  }

  bzzGetCurrentProvider() {
    return this.web3.bzz.currentProvider;
  }

  bzzUpload(data: any) {
    return defer(() => from((async () => {
      const res = await this.web3.bzz.upload(data);

      return res;
    })()));
  }

  bzzDownload(bzzHash: string, localPath?: string) {
    return defer(() => from((async () => {
      const res = await this.web3.bzz.download(bzzHash, localPath);

      return res;
    })()));
  }

  bzzPickFile() {
    return defer(() => from((async () => {
      const res = await this.web3.bzz.pick.file();

      return res;
    })()));
  }

  bzzPickDirectory() {
    return defer(() => from((async () => {
      const res = await this.web3.bzz.pick.directory();

      return res;
    })()));
  }

  bzzPickData() {
    return defer(() => from((async () => {
      const res = await this.web3.bzz.pick.data();

      return res;
    })()));
  }

  // shh
  shhSetProvider(prov: provider) {
    return this.web3.shh.setProvider(prov);
  }

  shhGetGivenProvider() {
    return this.web3.shh.givenProvider;
  }

  shhGetCurrentProvider() {
    return this.web3.shh.currentProvider;
  }

  // BatchRequest how?

  shhGetId() {
    return defer(() => from((async () => {
      const res = await this.web3.shh.net.getId();
      return res;
    })()));
  }

  shhIsListening() {
    return defer(() => from((async () => {
      const res = this.web3.shh.net.isListening();

      return res;
    })()));
  }

  shhGetPeerCount() {
    return defer(() => from((async () => {
      const res = this.web3.shh.net.getPeerCount();

      return res;
    })()));
  }

  shhGetVersion() {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getVersion();
      return res;
    })()));
  }

  shhGetInfo() {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getInfo();
      return res;
    })()));
  }

  shhSetMaxMessageSize(size: number) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.setMaxMessageSize(size);
      return res;
    })()));
  }

  shhSetMinPoW(pow: number) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.setMinPoW(pow);
      return res;
    })()));
  }

  shhMarkTrustedPeer(enode: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.markTrustedPeer(enode);
      return res;
    })()));
  }

  shhNewKeyPair() {
    return defer(() => from((async () => {
      const res = await this.web3.shh.newKeyPair();
      return res;
    })()));
  }

  shhAddPrivateKey(privateKey: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.addPrivateKey(privateKey);
      return res;
    })()));
  }

  shhDeleteKeyPair(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.deleteKeyPair(id);
      return res;
    })()));
  }

  shhHasKeyPair(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.hasKeyPair(id);
      return res;
    })()));
  }

  shhGetPublicKey(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getPublicKey(id);
      return res;
    })()));
  }

  shhGetPrivateKey(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getPrivateKey(id);
      return res;
    })()));
  }

  shhNewSymKey() {
    return defer(() => from((async () => {
      const res = await this.web3.shh.newSymKey();
      return res;
    })()));
  }

  shhAddSymKey(symKey: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.addSymKey(symKey);
      return res;
    })()));
  }

  shhGenerateSymKeyFromPassword(password: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.generateSymKeyFromPassword(password);
      return res;
    })()));
  }

  shhHasSymKey(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.hasSymKey(id);
      return res;
    })()));
  }

  shhGetSymKey(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getSymKey(id);
      return res;
    })()));
  }

  shhDeleteSymKey(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.deleteSymKey(id);
      return res;
    })()));
  }

  shhPost(object: PostWithSymKey | PostWithPubKey) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.post(object);
      return res;
    })()));
  }

  shhSubscribe(options: SubscriptionOptions) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.subscribe('messages', options);
      return res;
    })()));
  }

  shhNewMessageFilter(options?: SubscriptionOptions) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.newMessageFilter(options);

      return res;
    })()));
  }

  shhDeleteMessageFilter(id: string) {
    return this.web3.shh.deleteMessageFilter(id);
  }

  shhGetFilterMessages(id: string) {
    return defer(() => from((async () => {
      const res = await this.web3.shh.getFilterMessages(id);

      return res;
    })()));
  }

  utilsRandomHex(size: number) {
    return this.web3.utils.randomHex(size);
  }

  utilsIsBN(value: string | number) {
    return this.web3.utils.isBN(value);
  }

  utilsSha3(str: string) {
    return this.web3.utils.sha3(str);
  }

  utilsIsHex(hex: string) {
    return this.web3.utils.isHex(hex);
  }

  utilsIsHexStrict(hex: string) {
    return this.web3.utils.isHexStrict(hex);
  }

  utilsIsAddress(address: string) {
    return this.web3.utils.isAddress(address);
  }

  utilsToChecksumAddress(address: string) {
    return this.web3.utils.toChecksumAddress(address);
  }

  utilsCheckAddressChecksum(address: string) {
    return this.web3.utils.checkAddressChecksum(address);
  }

  utilsToHex(mixed: any) {
    return this.web3.utils.toHex(mixed);
  }

  utilsStripHexPrefix(str: string) {
    return this.web3.utils.stripHexPrefix(str);
  }

  utilsToBN(value: string | number) {
    return this.web3.utils.toBN(value);
  }

  utilsHexToNumberString(hex: Hex) {
    return this.web3.utils.hexToNumberString(hex);
  }

  utilsHexToNumber(hex: Hex) {
    return this.web3.utils.hexToNumber(hex);
  }

  utilsNumberToHex(value: number) {
    return this.web3.utils.numberToHex(value);
  }

  utilsHexToUtf8(hex: string) {
    return this.web3.utils.hexToUtf8(hex);
  }

  utilsHexToAscii(hex: string) {
    return this.web3.utils.hexToAscii(hex);
  }

  utilsUtf8ToHex(value: string) {
    return this.web3.utils.utf8ToHex(value);
  }

  utilsAsciiToHex(value: string) {
    return this.web3.utils.asciiToHex(value);
  }

  utilsHexToBytes(hex: Hex) {
    return this.web3.utils.hexToBytes(hex);
  }

  utilsBytesToHex(arr: number[]) {
    return this.web3.utils.bytesToHex(arr);
  }

  utilsToWei(val: BN, unit?: Unit) {
    return this.web3.utils.toWei(val, unit);
  }

  utilsFromWei(value: string | BN, unit?: Unit) {
    return this.web3.utils.fromWei(value, unit);
  }

  utilsPadLeft(value: string | number, characterAmount: number, sign?: string) {
    return this.web3.utils.padLeft(value, characterAmount, sign);
  }

  utilsPadRight(value: string | number, characterAmount: number, sign?: string) {
    return this.web3.utils.padRight(value, characterAmount, sign);
  }

  utilsToTwosComplement(value: string | number | BN) {
    return this.web3.utils.toTwosComplement(value);
  }
}
