import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'home-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  
  public registerForm:FormGroup;
  public submittedReg = false;

  constructor(private formBuilder:FormBuilder,private _auth:AuthService) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
    })
  }

    // convenience getter for easy access to form fields
    public get f() { return this.registerForm.controls; }


     onSubmit() {

         
          this.submittedReg = true;

         //stop here if form is invalid
         if (this.registerForm.invalid) {
            return;
        }
  
         // display form values on success
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this._auth.registerUser(this.registerForm.value).subscribe(
          res=>console.log(res),
          err=>console.log(err)
        )
     }

}
