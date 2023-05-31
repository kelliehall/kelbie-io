import { NgModule } from '@angular/core';

import { NavComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [NavComponent]
})
export class CoreModule { }
