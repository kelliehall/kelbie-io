import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { TelemetryService } from './services/telemetry.service';

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
  ],
  providers: [
    TelemetryService
  ]
})
export class CoreModule { }
