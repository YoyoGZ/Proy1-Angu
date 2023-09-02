import { Component, Inject } from '@angular/core';
import { Course } from '../../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-form-dialog',
  templateUrl: './course-form-dialog.component.html',
  styleUrls: ['./course-form-dialog.component.scss']
})
export class CourseFormDialogComponent {

  editingCourse?: Course;

  nameControl = new FormControl < string | null >( null,[
    Validators.required, 
    Validators.minLength(3)] );
  descriptionControl = new FormControl< string | null >(null,[
    Validators.required, 
    Validators.minLength(3)] );
  iniDateControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(8)]);
  finalDateControl = new FormControl < string | null >(null,[
    Validators.required, 
    Validators.minLength(8)] );

  courseForm = new FormGroup({
    name: this.nameControl,
    description: this.descriptionControl,
    iniDate: this.iniDateControl,
    finalDate: this.finalDateControl
  });

  constructor(private dialogRef: MatDialogRef<CourseFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Course
    
    ) {
      if(this.data) {
        this.editingCourse = this.data;
        this.nameControl.setValue(this.data.name);
        this.descriptionControl.setValue(this.data.description);
        this.iniDateControl.setValue(this.data.iniDate);
        this.finalDateControl.setValue(this.data.finalDate);

      }

    }

  onSubmit(): void {
    if( this.courseForm.invalid) {
      this.courseForm.markAllAsTouched
    } else {this.dialogRef.close(this.courseForm.value)
    this.dialogRef.afterClosed().subscribe({
      next: (v) => {
        console.log('Valor Recibido', v); 
      }
    })
  }}
}
