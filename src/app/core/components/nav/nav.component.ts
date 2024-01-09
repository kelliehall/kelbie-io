import { Component } from '@angular/core';
import { TelemetryService } from '../../services/telemetry.service';

@Component({
    selector: 'kel-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    constructor(private telemetryService: TelemetryService) { }
}
