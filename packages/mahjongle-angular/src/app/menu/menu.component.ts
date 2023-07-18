import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Link {
  title: string;
  route: string;
  icon: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() activeRoute!: string;
  @Output() activeRouteChange: EventEmitter<string> = new EventEmitter<string>;

  linkArray: Link[];

  constructor() {
    this.linkArray = [
      { title: 'Add Hand', route: '/hand-builder', icon: 'bookmark_add' }
    ];
  }

  navigateToLink(link: Link): void {
    if (!link?.route)
      return;

    console.log(link);
    this.activeRoute = link.route;
    this.activeRouteChange.emit(this.activeRoute);
  }

}
