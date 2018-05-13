import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Logger } from '../../shared/logger';
import { MovieService } from '../../services/movie.service';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnChanges, OnInit {
    public basketElements: number = 0;
    private logger: Logger = new Logger("menu");
    private loggedIn: boolean = false;

    constructor(private _movieService: MovieService, private _loginService: LoginService) {
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.basketElements = this._movieService.basketCount;
    }
    ngOnInit(): void {
        this.basketElements = this._movieService.basketCount;

        this._movieService.basketEmmiter.subscribe((general: any) => {
            if (general == true) {
                this.basketElements = this._movieService.basketCount;
            }
        });
        this._loginService.LoginEmmiter.subscribe((general: any) => {
            if (general == true) {
                this.loggedIn = this._loginService.loggedIn;
            }
        });
    }
    update(): void {

        this.basketElements = this._movieService.basketCount;
    }
    log(message: string): void {
        this.logger.log(`Wybrano pozycję: ${message}`);
    }

    logOut() {
        this._loginService.logOut();
    }
}
