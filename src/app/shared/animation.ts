import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(200)
    ]),
    transition('* => void', [
      animate(200, style({ transform: 'translateX(100%)' }))
    ])
  ]); 
