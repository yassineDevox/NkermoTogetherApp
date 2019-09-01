import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'home-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  
  registerForm:FormGroup;
  submittedReg = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
    })
  }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

     onSubmit() {
         this.submittedReg = true;
  
         // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }
  
         // display form values on success
         alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
     }
  

}
