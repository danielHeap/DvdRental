import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Logger } from '../../shared/logger';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Output() logged: EventEmitter<number> =
        new EventEmitter();
    loginField: string = "";
    passwordField: string = "";
    loginFailed: boolean = false;
    loggedIn: boolean = false;

    logger: Logger = new Logger("login");

    constructor(private _loginService: LoginService) {
    }

    onKey(event: any) {
        console.log(event.target.value);
    }

    login(): void {
        if (this.passwordField == "123" && this.loginField == "klient") {
            this._loginService.logIn();
            this.logger.log(`OK| ${this.loginField}: ${this.passwordField}`);
        }
        else if (this.passwordField == "123" && this.loginField == "pracownik") {
            this._loginService.logIn();
            this.logger.log(`OK| ${this.loginField}: ${this.passwordField}`);
        }
        else {
            this.loginFailed = true;
            this.logger.log(`ERROR| błędne dane logowania| ${this.loginField}: ${this.passwordField}`);
        }
        this.passwordField = "";
        this.loginField = "";
    }

    ngOnInit(): void {
        this._loginService.LoginEmmiter.subscribe((general: any) => {
            if (general == true) {
                this.loggedIn = this._loginService.loggedIn;
            }
        });

        this._loginService.logIn();
    }
}
