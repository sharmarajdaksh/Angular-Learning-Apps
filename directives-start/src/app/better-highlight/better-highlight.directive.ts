import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = null;
    @Input('appBetterHighlight') highlightColor: string = null;
    @Input() textColor = 'black';

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') color: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
        this.color = this.textColor;
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;

    }
    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', null);
        this.backgroundColor = this.defaultColor;
    }
}
