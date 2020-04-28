import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  private _rootUrl :string='https://jsonplaceholder.typicode.com/users';
  private users: IUser[]=[{
      id: 1,
      name: "Leanne Graham",
       email: "Sincere@april.biz"  
      },
      {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv"
      
      },
      
   
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org"
      
    }
       ];

  constructor(private http:HttpClient) { }
   
   getUsers():IUser[]
   {
     return this.users;
   }
   
   getUsersviaRest():Observable<IUser[]>{
     return this.http.get<IUser[]>(this._rootUrl);
   }

   getUserById(id:number):IUser
   {
     return this.users.filter(user=>user.id===id)[0];
   }

   getUsersByIdviaRest(id:number):Observable<IUser>{
     return this.http.get<IUser>(`${this._rootUrl}/${id}`);
   }

   createUser(user:IUser):Observable<IUser>
   {
     return this.http.post<IUser>(this._rootUrl,user);
   }

   updateUser(user:IUser):Observable<IUser>
   {
     return this.http.put<IUser>(this._rootUrl,user);
   }

   deleteUser(id:number):Observable<IUser>
   {
     return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
   }
   
}
