import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MessageComponent } from './components/message/message.component';
import { UserService } from './services/user.service';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    PlaceholderComponent,
    UserDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
