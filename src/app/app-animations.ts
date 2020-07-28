import { style, query, animateChild, group, animate, animation } from "@angular/animations";

export const transitionBetweenComponent = animation ([
    style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                right: '{{rightPosition}}',
                left: '{{leftPosition}}',
                width: '100%'
            })
        ]),
        query(':enter', [style({ right: '{{rightEnter}}', left: '{{leftEnter}}', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('1s ease-out', style({ right: '{{rightAnimateLeave}}', 
                                                            left: '{{leftAnimateLeave}}', opacity: 0 }))]),
            query(':enter', [animate('1s ease-out', style({ right: '{{rightAnimateEnter}}', 
                                                            left: '{{leftAnimateEnter}}', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
])