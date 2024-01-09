import { Directive, ElementRef, HostListener } from '@angular/core';
import { TelemetryService } from '../services/telemetry.service';

@Directive({
    selector: '[trackClicks]'
})
export class TrackClicksDirective {
    constructor(private el: ElementRef, private telemetryService: TelemetryService) { }

    @HostListener('click') public onClick() {
        this.log();
    }

    public log() {
        const id = this.el?.nativeElement.id || null;
        const text = this.el?.nativeElement.innerText || null;
        this.telemetryService.logEvent(`Button - ${text}`, { id });
    }
}