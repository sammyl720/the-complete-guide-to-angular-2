import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup
  ngOnInit() {

    this.signupForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.asyncForbiddentProjName),
      'status': new FormControl('stable'),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    // this.signupForm.reset()
  }

  // ? project name validator (make sure name not equal 'test)
  forbiddenProjName(control: FormControl): {[ s: string]: boolean } {
    if(control.value === 'test'){
      return { 'forbiddenName': true }
    } else {
      return null
    }
  }
  // ? async project name validator (make sure name not equal 'test)
  asyncForbiddentProjName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test'){
          resolve({ 'forbiddentName': true })
        } else  {
          resolve(null)
        }
      }, 1500)
    })
    return promise
  }
}
