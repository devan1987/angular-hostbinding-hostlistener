import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 >Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

 // @HostBinding('style.color') color = 'red';
 // @HostListener('click') change() {
 //   this.color = 'blue';
 // }

}
