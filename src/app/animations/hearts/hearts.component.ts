import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.css'],
  animations: [
    trigger('state', [
      state('in', style({ transform: 'translateX(800%)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('2.3s')
      ])
    ])
  ]
})
export class HeartsComponent implements OnInit {
  @HostBinding('@state')
  state: any = 'in';

  // tslint:disable-next-line: no-output-native
  @Output()
  close = new EventEmitter();

  public style1: any;
  public style2: any;
  public style3: any;

  public color: string;
  public size: string;
  public numb: number;

  public colors: string[] = [
    '#ffe555',
    'rgba(255, 94, 215, 0.808)',
    'rgb(89, 244, 255)',
    '#FF0000',
    'rgb(112, 255, 112)',
    'rgb(151, 149, 247)'
  ];

  public sizes: string[] = [
    '100px',
    '200px',
    '150px',
    '50px',
    '175px',
    '225px'
  ];

  constructor() {}

  ngOnInit(): void {
    this.style1 = {
      color: this.setRandomColor(),
      'font-size': this.setRandomSize()
    };
    this.style2 = {
      color: this.setRandomColor(),
      'font-size': this.setRandomSize()
    };
    this.style3 = {
      color: this.setRandomColor(),
      'font-size': this.setRandomSize()
    };

    this.setLifeTime();
  }

  public setRandomColor(): string {
    const numb = Math.round(Math.random() * 5);
    return this.color = this.colors[numb];
  }

  public setRandomSize(): string {
    const numb = Math.round(Math.random() * 5);
    return this.size = this.sizes[numb];
  }

  public setLifeTime(): void {
    setTimeout(() => this.close.emit(), 2300);
  }
}
