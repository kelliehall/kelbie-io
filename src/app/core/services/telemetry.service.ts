import { Injectable } from '@angular/core';
import { ApplicationInsights, SeverityLevel } from '@microsoft/applicationinsights-web';

@Injectable()
export class TelemetryService {
    private appInsights: any;

    constructor() {
        const appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: '03e803ab-b450-4ae8-89a3-8ca190258c57',
                autoTrackPageVisitTime: true
            }
        });

        this.appInsights = appInsights.loadAppInsights();
        this.appInsights.trackPageView();
        this.appInsights.addTelemetryInitializer((envelope: { baseData: any; tags: { [x: string]: any; }; }) => {
            const telemetryItem = envelope.baseData;
            telemetryItem.properties = telemetryItem.properties || {};
            telemetryItem.properties.Origin = 'UI';
        });
    }

    public logDependency(id: string, method: string, absoluteUrl: string, pathName: string, totalTime: number, success: boolean, resultCode: number) {
        const objDependency = { id, responseCode: resultCode, absoluteUrl, method, pathName, totalTime, success, resultCode };
        this.appInsights.trackDependencyData(objDependency);
    }

    public logEvent(name: string, properties?: any, measurements?: any) {
        this.appInsights.trackEvent({ properties, measurements, name });
    }

    public logExceptionCritical(exception: Error, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackException({ exception, properties, measurements, severityLevel: SeverityLevel.Critical });
    }

    public logExceptionError(exception: Error, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackException({ exception, properties, measurements, severityLevel: SeverityLevel.Error });
    }

    public logExceptionInformation(exception: Error, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackException({ exception, properties, measurements, severityLevel: SeverityLevel.Information });
    }

    public logExceptionVerbose(exception: Error, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackException({ exception, properties, measurements, severityLevel: SeverityLevel.Verbose });
    }

    public logExceptionWarning(exception: Error, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackException({ exception, properties, measurements, severityLevel: SeverityLevel.Warning });
    }

    public logMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: { [name: string]: string }) {
        this.appInsights.trackMetric({ name, average, min, max, sampleCount, properties });
    }

    public logPageView(name?: string, url?: string, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.trackPageView({ name, properties, measurements, uri: url });
    }

    public logTraceCritical(message: string, properties?: { [name: string]: string }) {
        this.appInsights.trackTrace({ message, properties, severityLevel: SeverityLevel.Critical });
    }

    public logTraceError(message: string, properties?: { [name: string]: string }) {
        this.appInsights.trackTrace({ message, properties, severityLevel: SeverityLevel.Error });
    }

    public logTraceInformation(message: string, properties?: { [name: string]: string }) {
        this.appInsights.trackTrace({ message, properties, severityLevel: SeverityLevel.Information });
    }

    public logTraceVerbose(message: string, properties?: { [name: string]: string }) {
        this.appInsights.trackTrace({ message, properties, severityLevel: SeverityLevel.Verbose });
    }

    public logTraceWarning(message: string, properties?: { [name: string]: string }) {
        this.appInsights.trackTrace({ message, properties, severityLevel: SeverityLevel.Warning });
    }

    public setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string, storeInCookie = false) {
        this.appInsights.setAuthenticatedUserContext(authenticatedUserId, accountId, storeInCookie);
    }

    public clearAuthenticatedUserContext() {
        this.appInsights.clearAuthenticatedUserContext();
    }

    public startTrackPage(name?: string) {
        this.appInsights.startTrackPage(name);
    }

    public stopTrackPage(name?: string, url?: string, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.stopTrackPage(name, url, properties, measurements);
        this.flush();
    }

    public startTrackEvent(name?: string) {
        this.appInsights.startTrackEvent(name);
    }

    public stopTrackEvent(name?: string, properties?: { [name: string]: string }, measurements?: { [name: string]: number }) {
        this.appInsights.stopTrackEvent(name, properties, measurements);
        this.flush();
    }

    public flush() {
        this.appInsights.flush();
    }
}
