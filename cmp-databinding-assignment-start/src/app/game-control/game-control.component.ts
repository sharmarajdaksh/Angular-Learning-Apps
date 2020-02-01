import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent implements OnInit {
    @Output() oddEvent = new EventEmitter<number>();
    @Output() evenEvent = new EventEmitter<number>();
    
    timeBomb: any;
    timerActive = false;
    counter = 0;

    constructor() { }

    ngOnInit() {
    }

    tickFunction() {
        ++this.counter;
        if (this.counter % 2) {
            this.oddEvent.emit(this.counter);
        } else {
            this.evenEvent.emit(this.counter);
        }
    }

    onStart() {
        if (!this.timerActive) {
            this.timerActive = true;
            this.timeBomb = setInterval(() => this.tickFunction(), 1000);
        }
    }

    onStop() {
        clearInterval(this.timeBomb);
        this.counter = 0;
        this.timerActive = false;
    }
}
