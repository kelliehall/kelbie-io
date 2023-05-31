import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGetComponent, BlogPostComponent } from './components';

const routes: Routes = [
    {
        path: 'get',
        component: BlogGetComponent
    },
    {
        path: 'post',
        component: BlogPostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
