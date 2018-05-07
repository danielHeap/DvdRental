import { Component } from '@angular/core';
import { Logger } from '../../shared/logger';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    public basketElements: number = 2;

    private logger: Logger = new Logger("menu");

    log(message: string): void {
        this.logger.log(`Wybrano pozycję: ${message}`);
    }
}
