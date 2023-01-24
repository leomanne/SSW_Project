import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>{{name}}!</h3>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
