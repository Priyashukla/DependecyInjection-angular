import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/IUser';
import { Observable, observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
   user: IUser;
   posts:any;
  constructor(private activatedRoute: ActivatedRoute,private userService: UserService) { }

  ngOnInit(){

   // this.activatedRoute.params
    //.toPromise()
    //.then(user => this.user=<IUser>user);
   //this.users=this.userService.getUsers();

    this.activatedRoute.params.subscribe((parameters)=>{
      //this.user=this.userService.getUserById(+params['id']);
      this.userService.getUsersByIdviaRest(+parameters['id']).subscribe(user=>this.user=user,
        err=>console.log('Got an error while fetching the user details:',err),
       ()=>alert('Fetch of user details completed!')
        );
     //this.user= this.user.filter((user)=>{return user.id === +params.userid;
     
    });
    }

  createUser()
  {
    this.user.id=null;
    this.userService.createUser(this.user).subscribe(
      user=>alert(`A new was created with an id:${user.id}`),
      err=>alert(`Got an error as:${err}`),
      ()=>alert(`Creation of user completed!`)
    );
  }
  updateUser()
  {
    this.user.name='sam kolder';
    this.user.email='sam.kolder@example.com';
    this.userService.createUser(this.user).subscribe(
      user=>alert(`The user updated`),
      err=>alert(`Got an error as:${err}`),
      ()=>alert(`Creation of user completed!`)
    );
  }
  deleteUser()
  {
    this.userService.deleteUser(this.user.id).subscribe(
      user=>alert(`user was deleted`),
      err=>alert(`Got an error as:${err}`),
      ()=>alert(`deletion of user completed!`)
    );
  }
  getUserPosts()
  {
     this.posts=this.userService.getUserPosts(this.user.id);
  }
  
}
  
 
