import { NgModule } from '@angular/core';
import { BlogGetComponent, BlogPostComponent } from './components';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
    imports: [
        BlogRoutingModule
    ],
    declarations: [
        BlogGetComponent,
        BlogPostComponent
    ]
})
export class BlogModule { }
