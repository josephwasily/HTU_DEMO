import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  @Input() members: string []= [];
  @Input() index: number = 0;
  @Output() memberRemovedEvents = new EventEmitter();

  ngOnInit(): void {
  }
  membersRemoved(){
    console.log('emitting event from child component to parent component');
    this.memberRemovedEvents.emit('hello');
  }
}
