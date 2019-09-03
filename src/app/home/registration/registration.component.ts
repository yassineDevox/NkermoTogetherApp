import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import {ToastrService} from 'ngx-toastr';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'home-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  @Output()isRegistrated = new EventEmitter<boolean>();
  public registerForm:FormGroup;
  public submittedReg = false;

  constructor(private formBuilder:FormBuilder,private _auth:AuthService,private toast:ToastrService) { }

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
          this.toast.error('everything is broken', 'Major Error', {
            timeOut: 3000
          });
        }
        
        //this.toast.success('Veuillez Comfirmer votre addresse email !!','Bienven '+this.registerForm.value.nom);

         // display form values on success
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this._auth.registerUser(this.registerForm.value).subscribe(
          res=>{
            this.toast.success('Insription','Veuillez Comfirmer votre addresse email !!');
            this.isRegistrated.emit(true);
        },
          err=>this.isRegistrated.emit(false)
        )
     }

}
