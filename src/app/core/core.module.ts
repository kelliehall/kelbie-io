import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { TelemetryService } from './services/telemetry.service';
import { TrackClicksDirective } from './directives/track-clicks.directive';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    TrackClicksDirective
  ],
  exports: [
    NavComponent,
    FooterComponent,
    TrackClicksDirective
  ],
  providers: [
    TelemetryService
  ]
})
export class CoreModule { }
