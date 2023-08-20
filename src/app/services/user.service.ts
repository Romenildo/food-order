import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/url';


const USER_KEY = "User"


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage())
  public userObservable:Observable<User>

  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable()
   }

   //interfaces não podem ser criadas novas instancias e os valores são obrigatorios
   login(userLogin: IUserLogin):Observable<User>{
    console.log(userLogin)
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user)=>{
          this.setUserToLocalStorage(user)
          console.log(user)
        },
        error:(errorResponse)=>{
          console.log(errorResponse)

        }
      })
    )
   }

   logout(){
    this.userSubject.next(new User())
    localStorage.removeItem(USER_KEY)
    window.location.reload()
   }

   private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    
    if(userJson){
      return JSON.parse(userJson) as User
    }
    return new User()
  }
}
