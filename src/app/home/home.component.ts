import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TALENTS } from '../../mocks/talents.mock';
import { Talent } from '../../models/talents.model';
import { Service } from 'src/models/services.model';
import { SERVICES } from 'src/mocks/services.mock';
import { Feedback } from 'src/models/feedbacks.model';
import { FEEDBACKS } from '../../mocks/feedbacks.mock';
import { Course } from '../../models/coures.model';
import { COURSES } from '../../mocks/courses.mock';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {
  
  public talents:Array<Talent>;
  public services:Array<Service>;
  public usrsFeedback:Array<Feedback>;
  public courses:Array<Course>;

  searchForm:FormGroup;
  submittedSearch = false;
  
  @ViewChild('carousel') course:ElementRef;
  @ViewChild('testiSlider')slider :ElementRef;

  constructor(private formBuilder:FormBuilder){}

  ngAfterViewInit(): void {
    this.active_course();
    this.testimonials_slider();
  }

  ngOnInit() {

    this.searchForm = this.formBuilder.group({
      searchKey:['',Validators.required]
    })


    this.talents = TALENTS;
    this.services = SERVICES;
    this.usrsFeedback = FEEDBACKS;
    this.courses = COURSES;
    this.navbarFixed();$("#search_input_box").hide();
  }

  searchToggle(){
      $("#search_input_box").slideToggle("slow");
      $("#search_input").focus();
  }
  closeSearch(){
    $("#search_input_box").slideUp("slow");
  }

  navbarFixed() {  
   var nav_offset_top = $("header").height() + 50;
    if ($(".header_area").length) {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }

  active_course(){

    if ($(this.course.nativeElement).length) {

      $(this.course.nativeElement).owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<img src='../../assets/img/prev.png'>", "<img src='../../assets/img/next.png'>"],
        responsive: {
          0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  testimonials_slider(){

    if ($(this.slider.nativeElement).length) {
      $(this.slider.nativeElement).owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        autoplay: 2500,
        smartSpeed: 2500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          991: {
            items: 2
          }
        }
      });
    }
  }

   onSubmitSearch() {
    this.submittedSearch = true;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchForm.value, null, 4));
  }

}
