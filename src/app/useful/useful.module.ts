import { NgModule } from '@angular/core';
import { UsefulLinksComponent } from './links/links.component';
import { UsefulRoutingModule } from './useful-routing.module';

@NgModule({
    imports: [
        UsefulRoutingModule
    ],
    declarations: [
        UsefulLinksComponent
    ]
})
export class UsefulModule { }
