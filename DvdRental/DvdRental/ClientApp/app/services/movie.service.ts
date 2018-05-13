import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class MovieService {
    private _basketCount: number = 0;
    basketEmmiter: EventEmitter<boolean> = new EventEmitter();

    set basketCount(value: number) {
        this._basketCount = value;
        this.basketEmmiter.next(true);
    }

    get basketCount(): number {
        return this._basketCount;
    }

    incrementBasket() {
        this.basketCount += 1;
    }
}