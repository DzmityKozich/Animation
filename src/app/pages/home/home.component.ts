import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('blokAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(200px)' }),
        animate('1s linear', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  animate: boolean;
  isDisabled: boolean;
  bodyEl = document.body;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.animate = true;
    this.isDisabled = false;
    console.log('ngOnInit HomeComponent');
  }

  scrollOff(event: any): void {
    this.render.addClass(this.bodyEl, 'scroll-off');
  }

  scrollOn(event: any): void {
    this.render.removeClass(this.bodyEl, 'scroll-off');
    this.isDisabled = true;
  }

  ngOnDestroy(): void {
    this.animate = false;
    this.isDisabled = true;
  }

}
