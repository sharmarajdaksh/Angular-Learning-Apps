import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
	trigger('divState', [
		state(
		'normal',
		style({
			'background-color': 'red',
			transform: 'translateX(0)'
		})
		),
		state(
		'highlighted',
		style({
			'background-color': 'blue',
			transform: 'translateX(100px)'
		})
		),
		transition('normal <=> highlighted', animate(500))
		// transition('highlighted => normal', animate(900))
	]),
	trigger('wildState', [
		state(
		'normal',
		style({
			'background-color': 'red',
			transform: 'translateX(0) scale(1)'
		})
		),
		state(
		'highlighted',
		style({
			'background-color': 'blue',
			transform: 'translateX(100px) scale(1)'
		})
		),
		state(
		'shrunken',
		style({
			'background-color': 'green',
			transform: 'translateX(0) scale(0.5)'
		})
		),
		transition('normal => highlighted', animate(300)),
		transition('highlighted => normal', animate(600)),
		transition('shrunken <=> *', [
		style({
			'background-color': 'orange',
			'border-radius': 0
		}),
		animate(
			1000,
			style({
			'border-radius': '50px'
			})
		),
		animate(1000)
		])
	]),
	trigger('list1', [
		state(
		'in',
		style({
			opacity: 1,
			transform: 'translateX(0px)'
		})
		),
		transition('void => *', [
		style({
			opacity: 0,
			transform: 'translateX(-100px)'
		}),
		animate(600)
		]),
		transition('* => void', [
		animate(
			600,
			style({
			transform: 'translateX(+100px)',
			opacity: 0
			})
		)
		])
	]),
	trigger('list2', [
		state(
		'in',
		style({
			opacity: 1,
			transform: 'translateX(0px)'
		})
		),
		transition('void => *', [
		animate(
			1000,
			keyframes([
			style({ transform: 'translateX(-100px)', opacity: 0, offset: 0 }),
			style({
				transform: 'translateX(-50px)',
				opacity: 0.5,
				offset: 0.3
			}),
			style({
				transform: 'translateX(-20px)',
				opacity: 1,
				offset: 0.8
			}),
			style({
				offset: 1
			})
			])
		)
		]),
		transition('* => void', [
		group([
			animate(
			600,
			style({
				color: 'red'
			})
			),
			animate(
			600,
			style({
				transform: 'translateX(+100px)',
				opacity: 0
			})
			)
		])
		])
	])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
	this.state === 'normal'
		? (this.state = 'highlighted')
		: (this.state = 'normal');
	this.wildState === 'normal'
		? (this.wildState = 'highlighted')
		: (this.wildState = 'normal');
  }

  onShrink() {
	this.wildState === 'shrunken'
		? (this.wildState = 'normal')
		: (this.wildState = 'shrunken');
  }

  onAdd(item) {
	this.list.push(item);
  }

  onDelete(item) {
	this.list = this.list.filter(it => it !== item);
  }

  animationStarted(item) {
	console.log('STARTED:');
	console.log(item);
  }

  animationEnded(item) {
	console.log('ENDED:');
	console.log(item);
  }
}
