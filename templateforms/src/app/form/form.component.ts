import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatForm, CatsService } from '../services/cats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  catForm : CatForm = 
  { "name": "ahsjkdhakjhada",
   "catsInfo": 
   { "catsName": "mocha", "catsEmail": "adasd@asdasd", "selfie": "hourly", "Milk": true, "Biscuits": false, "Cucumber": false }, 
   "catsBffName": "adasdasd", "bffGender": "male", "story": "asdasasd" }

  catFood: any [] = [
    { name:  'Milk', checked: true},
    { name:  'Biscuits', checked: false},
    { name:  'Cucumber',checked: false}
  ]
  title = 'templateforms';
  constructor(private catService: CatsService,
    private router: Router
    ){
    
  }
  onSubmit(form: NgForm){
    console.log(form);
    console.log(this.catForm);
    // const cat = form.value as CatForm;
    // this.catService.add(cat);
    // form.reset();
    // this.router.navigate(['preview']);
  }
  ngOnInit(): void {
  }
  changeCheckbox(){
    const selectedFood = this.catFood.filter((value,index)=> {
      return (value.checked == true);
    });
    console.log(selectedFood);
  }
  fillForm(event : Event, form: NgForm){
    event.preventDefault();
    //form.controls['name'].setValue('ahsjkdhakjhada');
    this.catForm.name = 'hello from 2-way data binding';
    //(form.controls['catsInfo'] as FormGroup).controls['catsName'].setValue('mocha');

    // form.reset();
    // this.router.navigate(['preview']);
  }
}
