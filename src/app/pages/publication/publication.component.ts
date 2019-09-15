import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Servicepublication } from '../../services/servicepublication.service';

import * as moment from "moment";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { requiredFileType } from '../../services/validation.helper';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  publicationForm:FormGroup;
  publications:any;
  suggestions:any;
  trends:any;
  ublications:String;
  moment : any;
  private file: File | null = null;
  public pubSub=false;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
    console.log(this.file);
  }


  constructor(private stageService: Servicepublication, 
              private host: ElementRef<HTMLInputElement>,
              private toast:ToastrService ) { }

  ngOnInit() {
    let i = 0;
    this.stageService.getAllPublications().subscribe((data)=>{
      this.publications = data;
      this.moment = moment(this.publications.content[i].dateDebut, "YYYY-MM-DDThh:mm:ss").lang('fr').fromNow();
      i++;
      console.log(this.publications );
      console.log(data);
    });
    $('#Slim,#Slim2').slimScroll({height: "auto", position: 'right', railVisible: true, alwaysVisible: true, size: "8px"});

    this.stageService.getAllSuggestions().subscribe((data) =>{
      this.suggestions = data;
    });
  
    this.stageService.getAllMyRecentlySaved().subscribe((data) =>{
      this.trends = data;
    });

   this.publicationForm = new FormGroup({
      desc: new FormControl(null,Validators.required),     
      photo: new FormControl(null,[requiredFileType('png')]),
      doc:new FormControl(null,[requiredFileType('pdf')]),
      video:new FormControl(null,[requiredFileType('mp4')])
   });

  
  }

  onSubmit(publicationForm){
    this.pubSub=true;
        //stop here if form is invalid
        if (this.publicationForm.invalid) {
          this.toast.error('Veuillez remplire ou moin le champ description', 'publication Incorrect', {
            timeOut: 3000
          });
        }
        else{
          //send the publication to the backend 
        }
     
    }

  


    // convenience getter for easy access to form fields
    public get f() { return this.publicationForm.controls; }

  allPublicationByEtat(etat: string) {
    let i =0;
    this.stageService.getAllPublicationsByEtat(etat).subscribe((data)=>{
      this.publications = data;
      this.moment = moment(this.publications.content[i].dateDebut, "YYYY-MM-DDThh:mm:ss").lang('fr').fromNow();
      i++;
      console.log(this.publications );
      console.log(data);
    });
  }

  convertDate(date: string): string {
    return moment(date, "YYYY-MM-DDThh:mm:ss").lang('fr').fromNow();
  }

}
