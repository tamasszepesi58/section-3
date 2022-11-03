import { Component, OnInit } from '@angular/core';
import { TitleBarComponent } from 'src/app/child.components/title-bar/title-bar.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  text: String[] = [
    "SZEMÉLYES ADATOK",
    "ELÉRHETŐSÉGEk",
    "Kedvenc sportok",
    "Sportesemények itt érdekelnek",
    "Bemutatkozás"
  ]

  public path: string = "../../../assets/title-bar/";

  public img: String[] = [
    this.path + "vector.svg",
    this.path + "contacts.svg",
    this.path + "KedvencSport.svg",
    this.path + "Sportesemények.svg",
    this.path + "Bio.svg",

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
