import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['../../shared/movie-modal.css']
})
export class MoviesComponent {
    public movies: Movie[];
    public filteredMovies: Movie[];
    public added: boolean = false;
    public addedMsg: string;
    @Output() addedToBasket: EventEmitter<number> =
        new EventEmitter();

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Movies/GetAll').subscribe(result => {
            this.filteredMovies = this.movies = result.json() as Movie[];
        }, error => console.error(error));
    }

    addToBasket(name: string): void {
        this.added = true;
        this.addedMsg = `Dodano do koszyka: ${name}`;

        this.addedToBasket.emit(1);
    }

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredMovies = this.listFilter ? this.performFilter() : this.movies;
    }

    performFilter(): Movie[] {
        var filterBy = this.listFilter.toLocaleLowerCase();
        return this.movies.filter((product: Movie) =>
            product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    removeTextFilter(): void {
        this.listFilter = "";
    }
}


export interface Actor {
    firstName: string;
    lastName: string;
}
export interface Role {
    actor: Actor;
    name: string;
    type: string;
}
export interface Movie {
    id: number;
    name: string;
    photoPath: string;
    releaseDate: Date;
    directior: string;
    scenarist: string;
    genres: any;
    cast: any;
}
