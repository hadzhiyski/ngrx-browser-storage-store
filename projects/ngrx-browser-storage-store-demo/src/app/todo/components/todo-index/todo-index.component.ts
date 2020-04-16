import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss']
})
export class TodoIndexComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
