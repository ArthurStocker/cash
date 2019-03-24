import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Account } from './account.class';
import { ACCOUNTS } from './accounts.default';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private messageService: MessageService) { }

  getAccounts(): Observable<Account[]> {
    // TODO: send the message _after_ fetching the accounts
    this.messageService.add('AccountService: fetched accounts');
    return of(ACCOUNTS);
  }

  getAccount(id: number): Observable<Account> {
    // TODO: send the message _after_ fetching the account
    this.messageService.add(`AccountService: fetched account id=${id}`);
    return of(ACCOUNTS.find(account => account.id === id));
  }

}
