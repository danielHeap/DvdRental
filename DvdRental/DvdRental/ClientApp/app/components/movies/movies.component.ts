import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import { Logger } from '../../shared/logger';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['../../shared/movie-modal.css']
})
export class MoviesComponent {
    public movies: Movie[] = new Array<Movie>();
    public navLabels: number[] = new Array<number>();
    private _currentLabel: number = 1;
    public generes: Genere[] = new Array<Genere>();
    public filteredGeneres: string[] = new Array<string>();
    private _filteredMovies: Movie[] = new Array<Movie>();
    public added: boolean = false;
    public addedMsg: string = "";
    _listFilter: string = "";
    _invertedSort: boolean = false;
    _sortedBy: number = 0;

    logger: Logger = new Logger("movies");

    constructor(private _movieService: MovieService, http: Http, @Inject('BASE_URL') baseUrl: string) {

        http.get(baseUrl + 'api/Movies/GetAll').subscribe(result => {
            this.filteredMovies = this.movies = result.json() as Movie[];
        }, error => console.error(error), () => this.removeTextFilter());
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
        this.logger.log(`Dodano do koszyka film ${name}`);
        this._movieService.incrementBasket();
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.currentLabel = 1;
    }

    get currentLabel(): number {
        return this._currentLabel;
    }
    set currentLabel(value: number) {
        this._currentLabel = value;
        this.filteredMovies = this.performFilter();
    }
    prevLabel() {
        if (this.navLabels.indexOf(this.currentLabel - 1) >= 0)
            this.currentLabel -= 1;
    }
    nextLabel() {
        if (this.navLabels.indexOf(this.currentLabel + 1) >= 0)
            this.currentLabel += 1;
    }
    get filteredMovies(): Movie[] {
        return this._filteredMovies;
    }
    set filteredMovies(value: Movie[]) {
        this._filteredMovies = value;
    }

    genereChanged(): void {
        var filtered = this.generes.filter((genere: Genere) =>
            genere.active === true
        );
        this.filteredGeneres = new Array<string>();
        filtered.forEach(x =>
            this.filteredGeneres.push(x.name)
        );
        this.currentLabel = 1;
    }

    performFilter(): Movie[] {
        var filtered = this.movies;
        if (this.listFilter) {
            var filterBy = this.listFilter.toLocaleLowerCase();
            filtered = filtered.filter((product: Movie) =>
                product.name.toLocaleLowerCase().indexOf(filterBy) != -1
            );
        }
        if (this.filteredGeneres && this.filteredGeneres.length > 0) {
            filtered = filtered.filter((product: Movie) =>
                product.genres.some(r => this.filteredGeneres.indexOf(r) >= 0)
            );
        }

        this.navLabels = new Array<number>();
        var i;
        for (i = 1; i < filtered.length / 3 + 1; i++) {
            this.navLabels.push(i);
        }

        var result = new Array<Movie>();
        if (filtered.length > (this.currentLabel - 1) * 3)
            result.push(filtered[(this.currentLabel - 1) * 3]);
        if (filtered.length > (this.currentLabel - 1) * 3 + 1)
            result.push(filtered[(this.currentLabel - 1) * 3 + 1]);
        if (filtered.length > (this.currentLabel - 1) * 3 + 2)
            result.push(filtered[(this.currentLabel - 1) * 3 + 2]);

        return result;
    }
    removeTextFilter(): void {
        this.listFilter = "";
    }

    get invertedSort(): boolean {
        return this._invertedSort;
    }
    set invertedSort(value: boolean) {
        this._invertedSort = value;
        console.log(value);
        switch (this._sortedBy) {
            case 1:
                this.performTitleSort();
                break;
            case 2:
                this.performDateSort();
                break;
            case 3:
                this.performDirectorSort();
                break;
            case 4:
                this.performScenaristSort();
                break;
        }
    }

    performTitleSort() {
        this.movies.sort((a, b) =>
            a.name.localeCompare(b.name) * (this.invertedSort ? -1 : 1)
        );
        this.currentLabel = 1;
        this._sortedBy = 1;
    }
    performDateSort() {
        this.movies.sort((a, b) =>
            a.releaseDate > b.releaseDate ? 1 : (a.releaseDate < b.releaseDate ? -1 : 0) * (this.invertedSort ? -1 : 1)
        );
        this.currentLabel = 1;
        this._sortedBy = 2;
    }
    performDirectorSort() {
        this.movies.sort((a, b) =>
            a.director.localeCompare(b.director) * (this.invertedSort ? -1 : 1)
        );
        this.currentLabel = 1;
        this._sortedBy = 3;
    }
    performScenaristSort() {
        this.movies.sort((a, b) =>
            a.scenarist.localeCompare(b.scenarist) * (this.invertedSort ? -1 : 1)
        );
        this.currentLabel = 1;
        this._sortedBy = 4;
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
    director: string;
    scenarist: string;
    genres: string[];
    cast: Role[];
}
export interface Genere {
    id: number;
    name: string;
    active: boolean;
}
