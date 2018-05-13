import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { LoginService } from '../../services/login.service';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MovieService, LoginService]
})
export class AppComponent {
    logged: boolean = false;

    loggin(event: any): void {
        this.logged = true;
    }
}
