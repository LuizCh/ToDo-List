import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appHideDelete]'
})
export class HideDeleteDirective {
	constructor(private elementRef: ElementRef) {}
	@HostListener('mouseover')
	onmouseover() {
		this.elementRef.nativeElement.children[1].style.display = 'inline';
	}
	@HostListener('mouseleave')
	onmouseleave() {
		this.elementRef.nativeElement.children[1].style.display = 'none';
	}
}
