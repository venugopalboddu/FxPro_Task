import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { combineLatest } from 'rxjs';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  {path: '', component: OneComponent},
  {path: 'com1', component: OneComponent},
  {path: 'com2', component: TwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
