import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class UsersresolveGuard implements Resolve<IUser[]> {
  
 constructor(private userService:UserService){}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):IUser[] {
    return this.userService.getUsers();
  }
  
}
