import { ThisReceiver } from '@angular/compiler';
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
  noOfTeams: number | string = 0;
  generatedTeams: string[][] = [];
  constructor(){
    console.log('hello from component constructor');
    console.log(this.generatedTeams);
    
  }
  addMember(){
    console.log('logging from event handler in typescript');
    if(!this.memberName){
      this.errorMessage = 'Name of team member cannot be empty';
      return;
    }
    this.teamMembers.push(this.memberName);
    console.log(this.teamMembers);
    this.memberName = '';
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
  generateTeams(){
      //no of teams 
      //array of teams 
    const allMembers = [...this.teamMembers];
    this.generatedTeams = [];
    while(allMembers.length){
      for(let i=0; i<this.noOfTeams; i++){
        console.log(i);
        const randomIndex = Math.floor(Math.random() * Number(this.noOfTeams)); 
        const member = allMembers.splice(randomIndex, 1)[0];
        //console.log(member);
        if(this.generatedTeams[i] ){
            this.generatedTeams[i].push(member);
        }
        else {
          this.generatedTeams[i] = [member];
        }
      }
      console.log(this.generatedTeams);
    }

    this.teamMembers = [];
    this.noOfTeams = 0;

  }
  onTeamsNumberInput(noOfTeams: number | string){
    this.noOfTeams = Number(noOfTeams);
    console.log(this.noOfTeams);
  }
  memberRemoved(event: any){
    console.log('event capture from child component inside parent component');
    console.log(event);
  }
}
