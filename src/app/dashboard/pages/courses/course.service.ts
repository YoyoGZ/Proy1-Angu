import { Injectable } from '@angular/core';
import { Course, CreateCourseId, UpdateCourseData } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';

const COURSE_DB: Observable<Course[]> = of([
    {
      id: 1,
      name: 'Black Jack',
      description: 'Black Jack Game',
      iniDate:  '02/01/2024',
      finalDate: '15/01/24',
    },
    {
      id: 2,
      name: 'Poker',
      description: 'Poker Game',
      iniDate:  '15/03/2024',
      finalDate: '25/08/24',
    },
    {
      id: 3,
      name: 'Counter Strike',
      description: 'Counter Strike Video Game',
      iniDate:  '02/01/2024',
      finalDate: '15/01/24',
    }
  ]).pipe(delay(1500));         
@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);  

  constructor() { }

  loadCourses(): void{
    COURSE_DB.subscribe({
      next: (coursesFromDb) => this.courses$.next(coursesFromDb)
    })
    // this.hhtpClient.get<Course[]>('http://localhost:3000/courses').subscribe({
    //   next:(response) => {
    //     console.log('RESPUESTA', response);
    //     this.courses$.next(response)
    //   }
    // })
  };
  
  getCourses() : Subject<Course[]> {
    return this.courses$;
  };

  getCourseById(id: number): Observable<Course | undefined> {
    return this.courses$.pipe(
      map(( courses ) => courses.find((c) => c.id === id)),
      take(1),
    );

  }
  createCourse(course: CreateCourseId): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.courses$.next([...arrayActual , {...course , id: arrayActual.length + 1}])
      }
    })
  };

  updateCourseById(id: number , courseUpdated: UpdateCourseData): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) =>{
        this.courses$.next(
          arrayActual.map((c) => 
            c.id === id ? {...c, ...courseUpdated} : c),
        );
      },
    });
  };

  deleteCourseById(id: number): void {
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => 
        this.courses$.next(arrayActual.filter((c) => c.id !== id)),
      });         
    }
  }
