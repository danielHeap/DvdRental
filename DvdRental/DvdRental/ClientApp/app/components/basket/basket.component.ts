import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Actor, Role, Movie } from '../movies/movies.component';

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html'
})
export class BasketComponent implements OnChanges{
    public movies: Movie[];
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Basket/GetBasket').subscribe(result => {
            this.movies = result.json() as Movie[];
        }, error => console.error(error));
    }

    remove(id: number): void {
        
        console.log(`deleting ${id}`);
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
