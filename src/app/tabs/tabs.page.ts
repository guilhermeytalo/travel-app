import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  home: any;
  search: any;
  save: any;
  config: any;

  constructor() {
    this.home = './assets/icon/home.svg';
    this.search = './assets/icon/search.svg';
    this.save = './assets/icon/bookmark.svg';
    this.config = './assets/icon/hexagon.svg';
  }

}
