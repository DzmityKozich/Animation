import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeartsComponent } from './animations/hearts/hearts.component';

const routes: Routes = [
  // {path: '', component: HeartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
