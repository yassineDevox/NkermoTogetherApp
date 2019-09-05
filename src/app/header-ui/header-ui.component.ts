import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css'],
})
export class HeaderUiComponent implements OnInit ,AfterViewInit{

  @Input() logoFor:string="";
  @Input() isAuth:boolean=false;
  @Input() headerColor:string="";
  public headerClass:string;

  @Output() loginOrRegister = new EventEmitter<string>();

  @ViewChild('header') headerEl:ElementRef;
  @ViewChild('menuIcon') menuIcon : ElementRef;
  public showRespMenu = false;

  constructor() { }

  ngAfterViewInit(){
    this.navbarFixed();$("#search_input_box").hide();
  }
  ngOnInit() {
    this.logoFor = this.logoFor === "home" ? "/assets/img/logo.png":"/assets/img/logo2.png";
    this.headerClass="header_area "+this.headerColor;
    //console.log(this.logoFor," ",this.isAuth," ",this.headerClass);
    this.showRespensiveMenu();
  }

  showRespensiveMenu(){
    $(this.menuIcon.nativeElement).click(()=>{
      if(!this.showRespMenu){
        $(this.menuIcon.nativeElement).attr("aria-expanded",true);
        this.showRespMenu=true;
        $('div.navbar-collapse').show('slow');      
      }else{
        $(this.menuIcon.nativeElement).attr("aria-expanded",false);
        this.showRespMenu=false;
        $('div.navbar-collapse').hide('slow'); 
      }
      
    });
  }

  searchToggle(){
    $("#search_input_box").slideToggle("slow");
    $("#search_input").focus();
  }

  navbarFixed() {  
    var nav_offset_top = $("header").height() + 50;
      if ($(this.headerEl.nativeElement).length) {
        let $that =  $(this.headerEl.nativeElement);
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $that.addClass("navbar_fixed");
          } else {
            $that.removeClass("navbar_fixed");
          }
        });
      }
    }

    onLogin(){
      this.loginOrRegister.emit("login");
    }

    onRegister(){
      this.loginOrRegister.emit("register");
    }

    onLogout(){
      this.isAuth=false;
    }
}
