import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
declare var $:any;

@Component({
  selector: 'home-form-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  searchForm:FormGroup;
  submittedSearch = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchKey:['',Validators.required]
    })
  }

  closeSearch(){
    $("#search_input_box").slideUp("slow");
  }
  

}
