import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { TALENTS } from '../../mocks/talents.mock';
import { Talent } from '../../models/talents.model';
import { Service } from 'src/models/services.model';
import { SERVICES } from 'src/mocks/services.mock';
import { Feedback } from 'src/models/feedbacks.model';
import { FEEDBACKS } from '../../mocks/feedbacks.mock';
import { Course } from '../../models/coures.model';
import { COURSES } from '../../mocks/courses.mock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  newsLetterForm:FormGroup;
  submitted = false;
  isAuth = false;

  @ViewChild('carousel') course:ElementRef;
  @ViewChild('testiSlider')slider :ElementRef;

  constructor(private formBuilder:FormBuilder){}

  ngAfterViewInit(): void {
    this.active_course();
    this.testimonials_slider();
  }

  ngOnInit() {
    this.newsLetterForm = this.formBuilder.group({
      email:['',[Validators.email,Validators.required]]
    })

    this.talents = TALENTS;
    this.services = SERVICES;
    this.usrsFeedback = FEEDBACKS;
    this.courses = COURSES;
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

  onSubmitNewsLetter() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newsLetterForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newsLetterForm.value, null, 4));
  }
  
  isRegister(isAuth){
    this.isAuth = isAuth;
    console.log(isAuth);
  }
}
