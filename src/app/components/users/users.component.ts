import { Component} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  users :IUser[]; 
  
  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    //this.users=this.userService.getUsers();
    //this.activatedRoute.data.forEach(data=>this.users=data.users);
    this.userService.getUsersviaRest().subscribe(
      users=>this.users=users
    );
  }

}
