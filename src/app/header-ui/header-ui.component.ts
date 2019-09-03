import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css']
})
export class HeaderUiComponent implements OnInit {

  @Input() logoFor:string;
  @Input() isAuth:boolean;
  @Input() headerColor:string="";
  public headerClass:string="header_area";

  constructor() { }

  ngOnInit() {
    this.logoFor = this.logoFor =="home" ? "/assets/img/logo.png":"/assets/img/logo2.png";
    this.headerClass="header_area"+this.headerColor;
    console.log(this.logoFor," ",this.isAuth," ",this.headerColor);
  }

  searchToggle(){
    $("#search_input_box").slideToggle("slow");
    $("#search_input").focus();
  }

}
