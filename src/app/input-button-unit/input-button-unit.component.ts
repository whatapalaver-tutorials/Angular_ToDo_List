import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World!'
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
