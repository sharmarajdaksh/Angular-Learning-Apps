import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: '<div>This is a warning</div>',
    styles: [`
        div {
            background: grey;
            padding: 2%;
            color: white;
            margin: 1%;
        }
        div:hover {
            background: red;
        }
    `]
})
export class WarningAlertComponent {
}