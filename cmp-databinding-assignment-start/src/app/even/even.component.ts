import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html'
})
export class EvenComponent {
    @Input() evenNumber: number;
}
