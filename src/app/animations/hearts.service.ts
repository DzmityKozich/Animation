import { Injectable, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { HeartsComponent } from './hearts/hearts.component';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeartsService{

  // tslint:disable-next-line: no-inferrable-types
  private toggle: boolean = false;
  private stream: any;

  constructor() { }

  public createHeart(): void {

    const heartEl: NgElement & WithProperties<HeartsComponent> = document.createElement('heart-element') as any;
    heartEl.addEventListener('close', () => document.body.removeChild(heartEl));
    document.body.appendChild(heartEl);

  }

  public createHeartsStream(): void {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.stream = setInterval(() => this.createHeart(), 300);
    } else {
      clearInterval(this.stream);
    }
  }

}
