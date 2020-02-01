import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    oddArray: number[] = [];
    evenArray: number[] = [];
    onOddEvent(event) {
        this.oddArray.push(event);
    }
    onEvenEvent(event) {
        this.evenArray.push(event);
    }
}
