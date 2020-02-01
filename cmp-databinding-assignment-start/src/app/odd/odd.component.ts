import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html'
})
export class OddComponent {
    @Input() oddNumber: number;
}
