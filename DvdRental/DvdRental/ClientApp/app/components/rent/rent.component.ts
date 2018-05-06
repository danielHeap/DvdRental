import { Component } from "@angular/core";


@Component({
    selector: "rent",
    templateUrl: "./rent.component.html"
})
export class RentComponent {
    delivery: boolean = false;
    personalCollection: boolean = false;
    firstName: string;
    lastName: string;
    postCode: string;
    city: string;
    street: string;

    personalClick(): void {
        this.delivery = false;
        this.personalCollection = true;
    }
    deliveryClick(): void {
        this.delivery = true;
        this.personalCollection = false;
    }

    personalConfirm(): void {

    }
    deliveryConfirm(): void {

    }

    home(): void {
        this.firstName = "Jan";
        this.lastName = "Kowalski";
        this.postCode = "25-318";
        this.city = "Kielce";
        this.street = "Sandomierska 500";
    }
    work(): void {

        this.firstName = "Jan";
        this.lastName = "Kowalski";
        this.postCode = "25-655";
        this.city = "Kielce";
        this.street = "Lódzka 1200";
    }
}