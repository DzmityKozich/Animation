import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, query, stagger, group, keyframes
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('blockAnimation', [
      transition(':enter', [
        query('.footer__item',
          style({ transform: 'translateY(200px)', opacity: '0' }),
        ),
        query('.footer__item', stagger('.15s', [
          group([
            animate('1.5s linear', style({ opacity: '1' })),
            animate('.7s ease', style({ transform: 'translateY(0)' })),
          ])
        ]))
      ]),
      transition(':leave', [
        query('.footer__item', stagger('.1s reverse', [
          animate('.1s linear', style({ opacity: '0' }))
        ]))
      ])
    ]),
    trigger('clickAnimation', [
      transition('* => *', [
        animate('1s', keyframes([
          // style({ transform: 'translateX(15px)', offset: 0 }),
          style({ transform: 'translateX(15px)', offset: 0.3 }),
          style({ transform: 'translateX(-15px)', offset: 0.6 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  public isAnimate: boolean;
  public clickAnimate: boolean;

  private bodyEl = document.body;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isAnimate = true;
    setTimeout(() => {
      this.renderer.removeClass(this.bodyEl, 'scroll-off');
    }, 1000);
  }

  public scrollOff(): void {
    this.renderer.addClass(this.bodyEl, 'scroll-off');
  }

  public trigger(): void{
    this.clickAnimate = true;
    // this.clickAnimate = false;
    setTimeout(() => this.clickAnimate = false, 10);
  }

}
