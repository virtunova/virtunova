import { Component, PLATFORM_ID, APP_ID, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {}
  title = 'Virtunova';
  links = [
    { 'display': 'Home', 'link': 'home', },
    { 'display': 'CoBo', 'link': 'cobo' },
    { 'display': 'About Us', 'link': 'about' },
    { 'display': 'Contact', 'link': 'contact' },
  ];
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  onActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
