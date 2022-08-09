import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  @ViewChild('myForm', {static:false}) form!: NgForm;
 
  onSubmit(){
    console.log(this.form);
  }
}
