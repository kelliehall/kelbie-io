import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsefulLinksComponent } from './links/links.component';

const routes: Routes = [
    {
        path: 'links',
        component: UsefulLinksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsefulRoutingModule { }
