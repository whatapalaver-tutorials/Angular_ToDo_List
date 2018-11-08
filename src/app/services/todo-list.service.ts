import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [ 
    {title: 'Research testing with Nokogiri'},
    {title: 'Prepare a dummy webscrape app with wiggle.co.uk'},
    {title: 'Mock up the tech challenge but do NOT commit'},
    {title: 'Set up a private repo'},
    {title: 'Prep the README and install reqd gems - Nokogiri, RSpec'},
    {title: 'Run the first commit'},
    {title: 'Set up timer for 2 hours'},
    {title: 'Code at pace!'},
    {title: 'Make sure you test!'}
  ];

  constructor() { }

  getTodoList() {
    return this.todoList;
  }
}
