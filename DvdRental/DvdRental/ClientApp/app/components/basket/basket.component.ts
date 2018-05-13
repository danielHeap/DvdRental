import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Actor, Role, Movie } from '../movies/movies.component';
import { Logger } from '../../shared/logger';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html'
})
export class BasketComponent implements OnChanges {
    public movies: Movie[] = new Array<Movie>();
    activeMovie: Movie = {
        id: 0,
        name: "",
        photoPath: "",
        releaseDate: new Date(),
        director: "",
        scenarist: "",
        genres: new Array<string>(),
        cast: [{
            actor: { firstName: "", lastName: "" },
            name: "",
            type: ""
        }]
    };

    logger: Logger = new Logger("basket");
    constructor(private _movieService: MovieService, http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Basket/GetBasket').subscribe(result => {
            this.movies = result.json() as Movie[];
        }, error => {
            console.error(error);
        }, () => {
            this.activeMovie = this.movies[0];
        });
    }

    remove(id: number): void {

        this.logger.log(`usuwanie filmu o id: ${id}`);
        this.movies = this.performFilter(id);
        this._movieService.basketCount = this.movies.length;
    }
    update() {

        this._movieService.basketCount = (this.movies.length);
    }
    setModal(movie: Movie) {
        this.activeMovie = movie;
    }

    performFilter(filterBy: number): Movie[] {
        filterBy = filterBy;
        return this.movies.filter((movie: Movie) =>
            movie.id !== filterBy);
    }
    ngOnChanges(changes: SimpleChanges): void {
        ;
    }
}
