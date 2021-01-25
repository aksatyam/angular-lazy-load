import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogRoutingModule } from './blog/blog-routing.module';



@NgModule({
  declarations: [
    SigninComponent, 
    BlogDetailsComponent],
  imports: [
    BlogRoutingModule
  ]
})
export class BlogModule { }
