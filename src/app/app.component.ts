import { Component, Injector } from '@angular/core';
import { HeartsService } from './animations/hearts.service';
import { createCustomElement } from '@angular/elements';
import { HeartsComponent } from './animations/hearts/hearts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animation';

  constructor(public heartService: HeartsService,
              public injector: Injector,
    ) {
      const heartElement = createCustomElement(HeartsComponent, { injector });
      customElements.define('heart-element', heartElement);

      this.heartService.createHeartsStream();
    }

}
