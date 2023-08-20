import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup
  isSubmitted = false;

  constructor(private fb: FormBuilder, private userService: UserService){}

  ngOnInit():void{
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  get fc(){
    return this.loginForm.value
  }

  submit(){
    this.isSubmitted = true
    if(this.loginForm.invalid)return

    this.userService.login(this.fc).subscribe(()=>{
      
    })
    
  }

  
}
