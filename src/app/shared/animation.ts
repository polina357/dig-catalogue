import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [
    state('*', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate(400)
    ]),
    transition(':leave', [
      animate(400, style({ transform: 'translateX(100%)' }))
    ])
  ]);
