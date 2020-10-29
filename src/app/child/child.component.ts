import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name : string;
  @Output() counter = new EventEmitter<number>();
  count = 0;
  constructor() { }

  didVote = false;

  incrementCounter() {
    this.counter.emit(++this.count);
  }

  ngOnInit() {
  }

}
