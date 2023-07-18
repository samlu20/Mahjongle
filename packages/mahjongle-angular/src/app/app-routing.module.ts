import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandBuilderComponent } from './hand-builder/hand-builder.component';

const routes: Routes = [
  {
    path: 'hand-builder',
    component: HandBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
