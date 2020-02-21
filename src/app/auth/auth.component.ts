import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true
  isLoading = false
  error: string = null
  constructor(private authService: AuthService, private router: Router){}
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm){
    if(!form.valid) return;
    this.error = null

    const { email, password } = form.value

    let authObs: Observable<AuthResponseData>

    this.isLoading = true
    if(this.isLoginMode){
      authObs = this.authService.login(email, password)
    } else {
      // signup mode
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe((resData) => {
      console.log(resData)
      this.isLoading = false
      this.router.navigate(['/recipes'])
    }, (errorMessage) => {
      console.log(errorMessage)
      this.error = errorMessage
      this.isLoading = false
    })
    
    form.reset()
  }
}