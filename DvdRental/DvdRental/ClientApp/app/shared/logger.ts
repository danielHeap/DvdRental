import { Observable } from "rxjs/Observable";
import { RequestOptions } from "@angular/http";

export class Logger {
    private viewName: string;
    constructor(viewName: string) {
        this.viewName = viewName;
    }

    log(message: string) {
        console.log(`${this.viewName}: ${message}`);
    }
}