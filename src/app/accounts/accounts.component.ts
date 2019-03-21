import { Component, OnInit } from '@angular/core';
import { Account } from '../account.class';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  account: Account = {
    id: 1000,
    name: 'Porte-Monnaie',
    class: '',
    order: 0,
    serial: 0,
    amount: 100.00,
    operator: '~',
    description: 'Kategorie Porte-Monnaie'
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
