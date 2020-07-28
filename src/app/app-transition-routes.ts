import { trigger, transition, useAnimation, style, query, animateChild, group, animate, animation } from "@angular/animations";
import { transitionBetweenComponent } from "./app-animations";

export const routeTransitionAnimations = trigger('triggerName', [
    transition('me => project', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '0',
                leftPosition: '',
                rightEnter: '-100%',
                leftEnter: '',
                rightAnimateLeave: '100%',
                leftAnimateLeave: '',
                rightAnimateEnter: '0%',
                leftAnimateEnter: ''
            }
        })
    ]),
    transition('me => contact', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '0',
                leftPosition: '',
                rightEnter: '-100%',
                leftEnter: '',
                rightAnimateLeave: '100%',
                leftAnimateLeave: '',
                rightAnimateEnter: '0%',
                leftAnimateEnter: ''
            }
        })
    ]),
    transition('project => contact', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '0',
                leftPosition: '',
                rightEnter: '-100%',
                leftEnter: '',
                rightAnimateLeave: '100%',
                leftAnimateLeave: '',
                rightAnimateEnter: '0%',
                leftAnimateEnter: ''
            }
        })
    ]),
    transition('project => me', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '',
                leftPosition: '0',
                rightEnter: '',
                leftEnter: '-100%',
                rightAnimateLeave: '',
                leftAnimateLeave: '100%',
                rightAnimateEnter: '',
                leftAnimateEnter: '0%'
            }
        })
    ]),
    transition('contact => me', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '',
                leftPosition: '0',
                rightEnter: '',
                leftEnter: '-100%',
                rightAnimateLeave: '',
                leftAnimateLeave: '100%',
                rightAnimateEnter: '',
                leftAnimateEnter: '0%'
            }
        })
    ]),
    transition('contact => project', [
        useAnimation(transitionBetweenComponent, {
            params: {
                rightPosition: '',
                leftPosition: '0',
                rightEnter: '',
                leftEnter: '-100%',
                rightAnimateLeave: '',
                leftAnimateLeave: '100%',
                rightAnimateEnter: '',
                leftAnimateEnter: '0%'
            }
        })
    ]),
])