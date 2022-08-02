import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  memberName: string = "";
  teamMembers: string[] = [];
  newVariable : string = 'Hello from Typecript variable';
  errorMessage: string = '';
  constructor(){
    console.log('hello from component constructor');
    
  }
  addMember(){
    console.log('logging from event handler in typescript');
    if(!this.memberName){
      this.errorMessage = 'Name of team member cannot be empty';
      return;
    }
    this.teamMembers.push(this.memberName);
    console.log(this.teamMembers);
  }
  onInput(member : string){
    //console.log('writing '+member);
    this.memberName = member;
    this.errorMessage = '';
  }
  clear(){
    this.teamMembers = [];
  }
  changeInput(){
    this.memberName = 'joseph';
  }
}
