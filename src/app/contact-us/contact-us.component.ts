import { Component, OnInit } from '@angular/core';
import { Agency } from '../../models/agency.model';
import { OUR_AGENCY } from '../../mocks/agency.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'home-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  agency:Agency;

  constructor(private _formBuilder:FormBuilder,private _toast:ToastrService) { }

  ngOnInit() {
    this.agency = OUR_AGENCY;
    this.contactForm = this._formBuilder.group({
      nom:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required],
      subject:['',Validators.required]
    });
  }

  public contactForm:FormGroup;
  public submittedcontact = false;

  onSubmit(){
    this.submittedcontact = true;
    if(this.contactForm.invalid){
      this._toast.error('Veuillez Remplir toutes les champ !!','Contact Incorrect')
      return;
    }
    //appel du service contactUsService !!
  }
}
