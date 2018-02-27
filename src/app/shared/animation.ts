import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [
    state('out', style({ transform: 'translateX(-100%)' })),
    state('in', style({ transform: 'translateX(0)' })),
    transition('out <=> in', animate('400ms ease-in'))
  ]); 
