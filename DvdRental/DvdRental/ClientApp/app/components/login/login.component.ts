import { Component, EventEmitter, Output } from '@angular/core';
import { Logger } from '../../shared/logger';

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

    logger: Logger = new Logger("login");

    onKey(event: any) {
        console.log(event.target.value);
    }

    login(): void {
        if (this.passwordField == "123" && this.loginField == "klient") {
            this.loggedIn = true;
            this.logger.log(`OK| ${this.loginField}: ${this.passwordField}`);
        }
        else if (this.passwordField == "123" && this.loginField == "pracownik") {
            this.loggedIn = true;
            this.logger.log(`OK| ${this.loginField}: ${this.passwordField}`);
        }
        else {
            this.loginFailed = true;
            this.logger.log(`ERROR| błędne dane logowania| ${this.loginField}: ${this.passwordField}`);
        }
    }
}
