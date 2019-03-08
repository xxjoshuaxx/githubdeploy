import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from './service/data.service';
import { Course } from './course/domain/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courses$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public course$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public showCourseForm$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public showCourseList$: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  getCourses(){
    this.dataService.getData("Course").subscribe(data => {
      this.courses$.next(data);
      console.log(data);
    }, err => console.log("Error fetching"))
  }

  setCourse(course){
      this.course$.next(course);
      this.showCourseForm$.next(true);
       this.showCourseList$.next(false);
  }

  initCourseForm(){
    this.showCourseForm$.next(false);
    this.showCourseList$.next(true);
  }

  cancelCourseForm(){
    this.showCourseForm$.next(false);
    this.showCourseList$.next(true);
  }
  
  addCourse(){
    let course = new Course();
    this.course$.next(course);
    this.showCourseForm$.next(true);
    this.showCourseList$.next(false);
  }

  saveCourse(course){
    this.dataService.postData("Course",course).subscribe(data => {
      this.getCourses();
      this.showCourseForm$.next(false);
      this.showCourseList$.next(true);
    }, err => console.log("Error fetching"))
  }
  
  
  
  public modules$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  getModules(){
    this.dataService.getData("Module").subscribe(data => {
      this.modules$.next(data);
      console.log(data);
    }, err => console.log("Error fetching"))
  }

  

  constructor(private http:HttpClient,private dataService:DataService) { }
}
