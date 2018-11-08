import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List'

const defaultTodoList = [
  {title: 'Research testing with Nokogiri'},
  {title: 'Prepare a dummy webscrape app with wiggle.co.uk'},
  {title: 'Mock up the tech challenge but do NOT commit'},
  {title: 'Set up a private repo'},
  {title: 'Prep the README and install reqd gems - Nokogiri, RSpec'},
  {title: 'Run the first commit'},
  {title: 'Set up timer for 2 hours'},
  {title: 'Code at pace!'},
  {title: 'Make sure you test!'}
]

@Injectable()
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = 
      storageService.getData(todoListStorageKey) || defaultTodoList;
   }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  private saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
}
