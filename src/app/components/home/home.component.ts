import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slider: any;
  constructor() {
    this.slider = './assets/icon/slider.svg';
  }

  ngOnInit() {}

}
