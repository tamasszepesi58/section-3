import { Component, OnInit } from '@angular/core';
import { toggleButtonAnimation } from '../../animations/toogle-button'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public passwordInputType = "text";

  public remember() {

    toggleButtonAnimation()
    return;
  }

  public changePasswordType() {
    let passwordInput = <HTMLInputElement>document.querySelector(".login .inputs .password input");
    if (this.passwordInputType === "text") {

      passwordInput.setAttribute("type", "password");
      this.passwordInputType = "password";
      return;
    } if (this.passwordInputType === "password") {

      passwordInput.setAttribute("type", "text");
      this.passwordInputType = "text";

      return;
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
