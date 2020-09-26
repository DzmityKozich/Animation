import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeartsAnimationPageComponent } from './hearts-animation-page/hearts-animation-page.component';
import { RouterModule } from '@angular/router';
import { HeartsComponent } from '../animations/hearts/hearts.component';
import { ModulesModule } from '../modules/modules.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeartsAnimationPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulesModule
  ],
  exports: [
    HomeComponent,
    HeartsAnimationPageComponent
  ],
  entryComponents: [HeartsComponent]
})
export class PagesModule { }
