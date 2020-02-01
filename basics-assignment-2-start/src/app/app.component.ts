import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = '';
    isUsernameBlank = true;

    updateButtonStatus() {
        if (this.username.length > 0) {
            this.isUsernameBlank = false;
        } else {
            this.isUsernameBlank = true;
        }
    }
}
