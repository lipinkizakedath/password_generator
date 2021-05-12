import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includLetters = false;
  inlcudeNumbers = false;
  includeSymbols = false;
  passwordLength: number = 0;

  onSelectLetters() {
    this.includLetters = !this.includLetters;
  }

  onSelectNumbers() {
    this.inlcudeNumbers = !this.inlcudeNumbers;
  }

  onSelectSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onSelectPasswordLength(value: string) {
    this.passwordLength = parseInt(value);
  }

  onButtonClick() {
    let generatedPassword = '';

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_/';

    let validChars = '';

    if (this.includLetters) {
      validChars += letters;
    }

    if (this.inlcudeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    for (let index = 0; index <= this.passwordLength; index++) {
      const indx = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[indx];
    }

    this.password = generatedPassword;
  }
}
