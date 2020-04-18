import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ITodo } from '../../store/models/todo.interfaces';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddTodoComponent {
  todoFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddTodoComponent, ITodo>) {
    this.todoFormGroup = new FormGroup({
      title: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl(),
    });
  }

  submit(): void {
    const title = this.todoFormGroup.get('title');
    const description = this.todoFormGroup.get('description');
    if (title && description) {
      const todo: ITodo = {
        id: Math.floor(Math.random() * 1000000),
        title: title.value,
        description: description.value,
        completed: false
      };
      this.dialogRef.close(this.todoFormGroup.valid ? todo : undefined);
    }
  }
}
