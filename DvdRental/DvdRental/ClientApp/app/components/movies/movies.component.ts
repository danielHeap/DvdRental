import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html'
})
export class MoviesComponent {
    public movies: Movie[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Movies/GetAll').subscribe(result => {
            this.movies = result.json() as Movie[];
        }, error => console.error(error));
    }
}

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}

interface Actor {
    firstName: string;
    lastName: string;
}
interface Role {
    actor: Actor;
    name: string;
    type: string;
}
interface Movie {
    name: string;
    photoPath: string;
    releaseDate: Date;
    directior: string;
    scenarist: string;
    cast: any;
}
