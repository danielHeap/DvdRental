import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Actor, Role, Movie } from '../movies/movies.component';
import { Logger } from '../../shared/logger';

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html'
})
export class BasketComponent implements OnChanges{
    public movies: Movie[];
    logger: Logger = new Logger("basket");
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Basket/GetBasket').subscribe(result => {
            this.movies = result.json() as Movie[];
        }, error => console.error(error));
    }

    remove(id: number): void {

        this.logger.log(`usuwanie filmu o id: ${id}`);
        this.movies = this.performFilter(id);
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
