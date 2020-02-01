import { Component, OnInit } from '@angular/core';

@Component({
    // selector: '[app-servers]',
    // selector: '.app-servers',
    selector: 'app-servers',
    // template: `
    // <app-server></app-server>
    // <app-server></app-server>`,
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['Testserver', 'Testserver'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() { }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `Server was created! It\'s name is ${this.serverName}`;
    }

    onUpdateServerStatus(event: any) {
        this.serverName = (event.target as HTMLInputElement).value; // explicit typecasting
    }
}
