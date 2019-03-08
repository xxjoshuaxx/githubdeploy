import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses;
  course;
  showCourseForm;
  showCourseList;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.courses$.subscribe((data) => {
      this.courses = data;
    });   

    this.courseService.course$.subscribe((data) => {
      this.course = data;
    });
    
    this.courseService.showCourseForm$.subscribe((data) => {
      this.showCourseForm = data;
    }); 

    this.courseService.showCourseList$.subscribe((data) => {
      this.showCourseList = data;
    }); 
    this.courseService. getCourses();
    this.courseService.initCourseForm();

  }

  selectCourse(course){
    this.courseService.setCourse(course);
  }

  cancel(){
    this.courseService.cancelCourseForm();
  }

  add(){
    this.courseService.addCourse();
  }

  save(){
    this.courseService.saveCourse(this.course);
  }

}
