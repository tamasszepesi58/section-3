import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { toggleButtonAnimation } from '../../animations/toogle-button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public passwordInputType = "text";
  public passwordInput: HTMLInputElement | null = document.querySelector(".login .inputs .password input");
  public invalidPassword = false;
  public invalidEmail = false;

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

  public validateEmail(): void {
    let emailRegex = environment.validation.regex.login.email;
    let emailInput: HTMLInputElement | null = document.querySelector(".login .inputs .Email input");
    let email = emailInput?.value

    if (typeof email === "string" && emailRegex.test(email)) {

      this.invalidEmail = false;
      this.validatePassword();

    } else {

      this.invalidEmail = true;

    }
    return;
  }

  public validatePassword(): void {
    let passwordRegex = environment.validation.regex.login.password;
    let passwordInput: HTMLInputElement | null = document.querySelector(".login .inputs .password input");
    let password = passwordInput?.value;

    if (passwordRegex.test(String(password))) {

      window.alert("Az adatok validak");
      passwordInput?.setAttribute("class", "");

    } else {
      passwordInput?.setAttribute("class", "wrong")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
