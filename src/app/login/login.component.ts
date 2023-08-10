import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = '';
password: string = '';
errorMessage: string = '';

constructor(private loginService: LoginService , private route: Router) {  this.email = ''; this.password = ''; }
onSubmit(){
  this.loginService.login(this.email, this.password).subscribe(
    (response)=>{
      if('sa@test.com' === this.email && '123456' === this.password){

        // console.log('Login Suceesful', response);
        this.route.navigate(['/home']);
        localStorage.setItem('userData',JSON.stringify(response))
      }else{
        this.errorMessage = 'Invalid Credentials'
      }

    },
    (error) => {
      console.error('Login Error', error);
    }
  )
}
}
