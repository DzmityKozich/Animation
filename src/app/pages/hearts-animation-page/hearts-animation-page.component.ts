import { Component, ElementRef, Injector, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HeartsService } from '../../animations/hearts/hearts.service';
import { createCustomElement } from '@angular/elements';
import { HeartsComponent } from '../../animations/hearts/hearts.component';

@Component({
  selector: 'app-hearts-animation-page',
  templateUrl: './hearts-animation-page.component.html',
  styleUrls: ['./hearts-animation-page.component.css']
})
export class HeartsAnimationPageComponent implements OnInit, OnDestroy {

  bodyEl = document.body;

  toggle = true;

  constructor(public heartService: HeartsService,
              public injector: Injector,
              private render: Renderer2
  ) {
    const heartElement = createCustomElement(HeartsComponent, { injector });
    if (!customElements.get('heart-element')) {
      // сообщим браузеру, что <heart-element> обслуживается нашим новым классом
      customElements.define('heart-element', heartElement);
    }
  }

  ngOnInit(): void {
    this.render.addClass(this.bodyEl, 'scroll-off');
    console.log('ADD in HeartsAnimationPageComponent');
    this.heartService.createHeartsStream(true);
  }

  ngOnDestroy(): void {
    this.heartService.createHeartsStream(false);
    this.render.removeClass(this.bodyEl, 'scroll-off');
    console.log('REMOVE in HeartsAnimationPageComponent');
  }

}
