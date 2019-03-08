import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  courses;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.courses$.subscribe((data) => {
      this.courses = data;
    });
  }

}
