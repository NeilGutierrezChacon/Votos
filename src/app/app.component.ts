import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor(){
    this.links=[
      new Link("Angular","https://angular.io",100),
      new Link("Youtube","https://youtube.com",300),
      new Link("FaztWeb","https://angular.io",100)

    ]
    console.log(this.links);
  }

  addLink(title: HTMLInputElement,link: HTMLInputElement){
    this.links.push(new Link(title.value,link.value));
    title.value='';
    link.value='';
    return false;
  }
}
