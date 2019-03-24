import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './account/account.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
