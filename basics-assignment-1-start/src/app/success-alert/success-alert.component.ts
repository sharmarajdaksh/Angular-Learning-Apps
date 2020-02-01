import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: '<div>Success!</div>',
    styles: [`
        div {
            background: green;
            padding: 2%;
            color: white;
            margin: 1%;
        }
        div:hover {
            background: darkgreen
        }
    `]
})
export class SuccessAlertComponent {
}