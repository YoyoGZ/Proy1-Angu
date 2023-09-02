import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../models';



@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styles: [ ]
})
export class CourseTableComponent{
  // public courses : Course[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'iniDate', 'finalDate', 'actions'];

  // ngOnInit(): void {
  //   this.courseService.loadCourses();
  //   this.courseService.getCourses().subscribe({
  //     next : (data) => console.log(data),      
  //   })  
  // }

  @Input()
  dataSource: Course[] = [];

  @Output()
  deleteCourse = new EventEmitter<Course>();

  @Output()
  editCourse = new EventEmitter<Course>();
}
