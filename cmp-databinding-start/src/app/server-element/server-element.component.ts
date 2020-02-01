import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    // encapsulation: ViewEncapsulation.None
    // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    // tslint:disable-next-line: no-input-rename
    @Input('srvElement') element: { type: string, name: string, content: string };
    // tslint:disable-next-line: no-input-rename
    @Input('') name: string;
    @ViewChild('heading', { static: true }) header: ElementRef;
    @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

    constructor() {
        console.log('Constructor called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit called');
        console.log('TextContent1: ', this.header.nativeElement.textContent);
        console.log('TextContent1: ', this.paragraph.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('TextContent: ' + this.header.nativeElement.textContent);
        console.log('TextContent1: ', this.paragraph.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called');

    }

}
