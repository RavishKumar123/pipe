import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Login } from './login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: Login = { uname: "admin", password: "admin123" };
  public form: FormGroup;
  message: string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {

    console.log(this.form.get('uname').value);
    console.log(this.form.get('password').value);
    if(((this.form.get('uname').value) == 'admin')&&(( this.form.get('password').value) == 'admin'))
        {
        alert("Login Successfully");    
        this.router.navigate(['/dashboards/dashboard1']);
        }
        else{
          this.message = "Please check your Username and password";
            alert("Invalid Username Or Password");
            
        }
    // this.router.navigate ( [ '/dashboards/dashboard1' ] );
  }

}
