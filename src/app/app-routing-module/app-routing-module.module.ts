import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AboutComponent } from '../components/about/about.component';
import { UsersComponent } from '../components/users/users.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { AuthGuard } from '../guards/auth.guard';
import { ConfirmationGuard } from '../guards/confirmation.guard';
import { MessageComponent } from '../components/message/message.component';
import { UserService } from '../services/user.service';
import { UsersresolveGuard } from '../guards/usersresolve.guard';

const appRoutes: Routes=[
  {path:"home",component:HomeComponent},
  {path:"blog",component:BlogComponent,canActivate:[AuthGuard] },
  {path:"about",component:AboutComponent},
  {path:"users",
  canActivateChild:[AuthGuard],
  //resolve:{
   // users:UsersresolveGuard
  //},
  component:UsersComponent,children:[
    {path:':id',component:UserDetailsComponent},
    {path:'',component:PlaceholderComponent}
  ]},

  {path:"message",component:MessageComponent,canDeactivate:[ConfirmationGuard]},
  //{ path:"",redirectTo:"/home",pathMatch:'full'}

]

@NgModule({
  providers:[AuthGuard,ConfirmationGuard,UserService,UsersresolveGuard],
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule] 
})
export class AppRoutingModuleModule { }
