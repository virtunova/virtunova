import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit { 
  @Input() links: Array<JSON>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRouteClass(route) {
    return (this.router.url === '/'+route) ? "active" : "inactive";
  }
}
