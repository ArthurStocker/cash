import { Component, OnInit } from '@angular/core';

import { PERIODES, CHARTTYPE, CHARTLEGEND, CHARTLABELS, CHARTDATAGROUP } from '../dashboard.default';

import { Account } from '../account.class';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartType = CHARTTYPE;
  public chartLegend = CHARTLEGEND;
  public chartLabels = CHARTLABELS;
  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 33, 67, 72, 84, 10], label: CHARTDATAGROUP[0].label, stack: CHARTDATAGROUP[0].group },
    { data: [28, 48, 40, 19, 86, 27, 90, 26, 12, 43, 56, 11], label: CHARTDATAGROUP[1].label, stack: CHARTDATAGROUP[1].group },
    { data: [10, 88, 29, 13, 40, 55, 67, 62, 23, 54, 12, 17], label: CHARTDATAGROUP[2].label, stack: CHARTDATAGROUP[2].group }
  ];

  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts()
        .subscribe(accounts => this.accounts = accounts);
  }

}
