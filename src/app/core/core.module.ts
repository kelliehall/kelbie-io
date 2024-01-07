import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    NavComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
