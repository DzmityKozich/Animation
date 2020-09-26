import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeartsAnimationPageComponent } from './pages/hearts-animation-page/hearts-animation-page.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hearts', component: HeartsAnimationPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
