import { Component } from "@angular/core";


@Component({
    selector: "rent",
    templateUrl: "./rent.component.html",
    styleUrls: ['./rent.component.css']
})
export class RentComponent {
    delivery: boolean = false;
    personalCollection: boolean = false;
    firstName: string;
    lastName: string;
    postCode: string;
    city: string;
    street: string;

    firstNameValid: number = 0;
    lastNameValid: number = 0;
    postCodeValid: number = 0;
    cityValid: number = 0;
    streetValid: number = 0;

    personalClick(): void {
        this.delivery = false;
        this.personalCollection = true;
    }
    deliveryClick(): void {
        this.delivery = true;
        this.personalCollection = false;
    }

    personalConfirm(): void {
        alert("Wypożyczono");
    }
    deliveryConfirm(): void {
        if (this.validateDelivery())
            alert("Wypożyczono");
    }

    validateDelivery(): boolean {
        var success = true;
        if (!this.firstNameValidation())
            success = false;
        if (!this.lastNameValidation())
            success = false;
        if (!this.postCodeValidation())
            success = false;
        if (!this.cityValidation())
            success = false;
        if (!this.streetValidation())
            success = false;

        return success;
    }
    firstNameValidation(): boolean {
        if (this.firstName && this.firstName.length >= 1) {
            this.firstNameValid = 1;
            return true;
        }
        else {
            this.firstNameValid = -1;
            return false;
        }
    }
    lastNameValidation(): boolean {
        if (this.lastName && this.lastName.length >= 1) {
            this.lastNameValid = 1;
            return true;
        }
        else {
            this.lastNameValid = -1;
            return false;
        }
    }
    postCodeValidation(): boolean {
        if (this.postCode && this.postCode.length >= 1) {
            this.postCodeValid = 1;
            return true;
        }
        else {
            this.postCodeValid = -1;
            return false;
        }
    }
    cityValidation(): boolean {
        if (this.city && this.city.length >= 1) {
            this.cityValid = 1;
            return true;
        }
        else {
            this.cityValid = -1;
            return false;
        }
    }
    streetValidation(): boolean {
        if (this.street && this.street.length >= 1) {
            this.streetValid = 1;
            return true;
        }
        else {
            this.streetValid = -1;
            return false;
        }
    }

    home(): void {
        this.firstName = "Jan";
        this.lastName = "Kowalski";
        this.postCode = "25-318";
        this.city = "Kielce";
        this.street = "Sandomierska 500";
        this.validateDelivery();
    }
    work(): void {

        this.firstName = "Jan";
        this.lastName = "Kowalski";
        this.postCode = "25-655";
        this.city = "Kielce";
        this.street = "Lódzka 1200";
        this.validateDelivery();
    }
}