import { Component, OnInit } from '@angular/core';
import { cardSizes } from './enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public size = cardSizes;
  public mobileView = false;

  public checkViewHeight() {
    let main = document.querySelector("main");

    if (Number(main?.offsetWidth) < 925) {

      this.mobileView = true;

      return;
    }; if (Number(main?.offsetWidth) > 925) {

      this.mobileView = false;
      return;
    };
  };

  text: String[] = [
    "péter által mentett cikkek",
    "utoljára olvasott cikkek"
  ]

  public path: string = "../../../assets/title-bar/";

  public img: String[] = [
    this.path + "saved-articles.svg",
    this.path + "articles-read.svg",
  ]
  constructor() { }

  ngOnInit(): void {

    let main = document.querySelector("main");

    if (Number(main?.offsetWidth) < 925) {
      this.mobileView = true;

      return;
    } if (Number(main?.offsetWidth) > 925) {

      this.mobileView = false;
      return;
    };
  }
}
