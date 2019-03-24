import { Component, OnInit } from '@angular/core';

import { Account } from '../account.class';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  selectedAccount: Account;
  accounts: Account[];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.getAccounts();
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  getAccounts(): void {
    this.accountService.getAccounts()
        .subscribe(accounts => this.accounts = accounts);
  }

}
