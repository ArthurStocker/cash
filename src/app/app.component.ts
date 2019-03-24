import { Component } from '@angular/core';

import { MENUITEMS } from './app-menu.default';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cash';

  navItems = MENUITEMS;

  constructor() { }

}
