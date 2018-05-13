import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    loggedIn: boolean = false;

    LoginEmmiter: EventEmitter<boolean> = new EventEmitter();

    logIn() {
        this.loggedIn = true;
        this.LoginEmmiter.next(true);
    }

    logOut() {
        this.loggedIn = false;
        this.LoginEmmiter.next(true);
    }

}