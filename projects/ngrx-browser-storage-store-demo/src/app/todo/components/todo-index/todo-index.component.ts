import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../../shared/layout.service';
import { ITodo } from '../../store/models/todo.interfaces';
import { ITodoState } from '../../store/reducers/todo.reducer';
import { selectAllTodos } from '../../store/selectors/todo.selectors';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { addTodo } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoIndexComponent {

  todos$: Observable<ITodo[]>;

  constructor(
    private store: Store<ITodoState>,
    private dialog: MatDialog
  ) {
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
}
