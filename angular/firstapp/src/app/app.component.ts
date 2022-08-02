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
  noOfTeams: number = 0;
  teams: string[][] = [];
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
  onTeamsNumbersInput(noOfTeamsInput: string){
    this.noOfTeams = Number(noOfTeamsInput);
  }
  generateTeams(){
    this.teams = [];
    const allMembers: string[] = [...this.teamMembers];
    while(allMembers.length != 0){
      for(let i=0; i< this.noOfTeams; i++){
        const randomIndex =  Math.floor(Math.random() * this.noOfTeams);
        //get random member from copied array 
        const member = allMembers.splice(randomIndex,1)[0];
        if(this.teams[i]){
            this.teams[i].push(member); //second and more member in teams
        }
        else {
          this.teams[i] = [member]; // first member in each team
        }
       
      }
    }
    this.teamMembers = [];
    this.noOfTeams = 0;
    console.log(this.teams);
    
  }
}
