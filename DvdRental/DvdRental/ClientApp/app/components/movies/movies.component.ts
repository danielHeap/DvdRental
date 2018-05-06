import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['../../shared/movie-modal.css']
})
export class MoviesComponent {
    public movies: Movie[];
    public generes: Genere[] = new Array<Genere>();
    public filteredGeneres: string[] = new Array<string>();
    public filteredMovies: Movie[];
    public added: boolean = false;
    public addedMsg: string;
    @Output() addedToBasket: EventEmitter<number> =
        new EventEmitter();

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Movies/GetAll').subscribe(result => {
            this.filteredMovies = this.movies = result.json() as Movie[];
        }, error => console.error(error));
        http.get(baseUrl + 'api/Movies/GetGeneres').subscribe(result => {
            var generesList = result.json() as string[];
            var it = 0;
            generesList.forEach(i => {
                this.generes.push({ id: ++it, name: i, active: false });
                this.filteredGeneres.push(i);
            });
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

    genereChanged(): void {
        var filtered = this.generes.filter((genere: Genere) =>
            genere.active === true
        );
        this.filteredGeneres = new Array<string>();
        filtered.forEach(x =>
            this.filteredGeneres.push(x.name)
        );
        this.filteredMovies = this.performFilter();
    }

    performFilter(): Movie[] {
        var filtered = this.movies;
        if (this.listFilter) {
            var filterBy = this.listFilter.toLocaleLowerCase();
            filtered = filtered.filter((product: Movie) =>
                product.name.toLocaleLowerCase().indexOf(filterBy) != -1
            );
        }
        if (this.filteredGeneres && this.filteredGeneres.length>0) {
            filtered = filtered.filter((product: Movie) =>
                product.genres.some(r => this.filteredGeneres.indexOf(r) >= 0)
            );
        }

        return filtered;
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
    genres: string[];
    cast: Role[];
}
export class Genere {
    id: number;
    name: string;
    active: boolean;
}
