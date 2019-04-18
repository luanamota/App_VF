import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AjustesPage } from '../ajustes/ajustes';
import { Objetivopt1Page } from '../objetivopt1/objetivopt1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Objetivopt1Page;
  tab2Root = AboutPage;
  tab3Root = AjustesPage;

  constructor() {

  }
}
