import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appHighlightButtons]'
})
export class HighlightButtonsDirective {
	constructor(private elementRef: ElementRef) {}
	@HostListener('mouseover')
	onmouseover() {
		// this.elementRef.nativeElement.children[1].style.display = 'inline';
		// .nativeElement.style.border
		// .nativeElement.style.borderColor;
		this.elementRef.nativeElement.style.borderColor = 'crimson';
	}
	@HostListener('mouseleave')
	onmouseleave() {
		this.elementRef.nativeElement.style.borderColor = 'white';
	}
}
