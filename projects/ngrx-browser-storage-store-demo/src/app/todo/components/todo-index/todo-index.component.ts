import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addTodo,
  setCompleted,
  removeTodo,
} from '../../store/actions/todo.actions';
import { ITodo } from '../../store/models/todo.interfaces';
import { ITodoState } from '../../store/reducers/todo.reducer';
import { selectAllTodos } from '../../store/selectors/todo.selectors';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoIndexComponent {
  todos$: Observable<ITodo[]>;

  constructor(private store: Store<ITodoState>, private dialog: MatDialog) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  openAddTodoDialog(): void {
    const addDialogRef = this.dialog.open<AddTodoComponent, any, ITodo>(
      AddTodoComponent,
      {
        closeOnNavigation: true,
        disableClose: true,
        panelClass: 'add-todo-dialog',
      }
    );

    addDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(addTodo({ todo: result }));
      }
    });
  }

  toggleTodoCompleted(id: number, completed: boolean): void {
    this.store.dispatch(setCompleted({ id, completed: !completed }));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(removeTodo({ id }));
  }
}
