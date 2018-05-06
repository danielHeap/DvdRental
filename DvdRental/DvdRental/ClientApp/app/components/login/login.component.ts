import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    @Output() logged: EventEmitter<number> =
        new EventEmitter();
    loginField: string ;
    passwordField: string;
    loginFailed: boolean = false;
    loggedIn: boolean = false;

    onKey(event: any) {
        console.log(event.target.value);
    }

    login(): void {
        if (this.passwordField == "123" && this.loginField == "klient") {
            console.log(this.loginField + " " + this.passwordField);
            this.loggedIn = true;
        }
        else if (this.passwordField == "123" && this.loginField == "pracownik") {
            console.log(this.loginField + " " + this.passwordField);
            this.loggedIn = true;
        }
        else {
            this.loginFailed = true;
        }
    }
}
