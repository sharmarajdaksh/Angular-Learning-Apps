import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .after5th {
      color: white;
  }
  `]
})
export class AppComponent {
    isVisible = false;
    clickLog = [];

    onClick() {
        this.isVisible = !this.isVisible;
        this.clickLog.push(new Date());
    }
}
