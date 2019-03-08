import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  modules;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.modules$.subscribe((data) => {
      this.modules = data;
    });   
    
    this.courseService. getModules();
  }

}
