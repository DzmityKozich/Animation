import { Injectable, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { HeartsComponent } from './hearts.component';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeartsService{

  private stream: any;

  constructor() { }

  public createHeart(): void {

    const heartEl: NgElement & WithProperties<HeartsComponent> = document.createElement('heart-element') as any;
    heartEl.addEventListener('close', () => document.body.removeChild(heartEl));
    document.body.appendChild(heartEl);

  }

  public createHeartsStream(toggle: boolean): void {
    if (toggle) {
      this.stream = setInterval(() => this.createHeart(), 300);
    } else {
      clearInterval(this.stream);
    }
  }

}
