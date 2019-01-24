import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => CoboPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
        })
      ]),
      query(':enter', [
        style({ left: '100%', opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-200%', opacity: 0}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('CoboPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '200%', opacity: 0}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);