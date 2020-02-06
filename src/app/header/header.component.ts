import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() activeRouteChange = new EventEmitter<{ route: string}>()
  constructor() { }

  ngOnInit() {
  }
  switchActiveRoute(route: string){
    this.activeRouteChange.emit({ route: route })
  }
}
