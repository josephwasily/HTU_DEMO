import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CatForm, CatsService } from '../services/cats.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 
  title = 'templateforms';
  constructor(private catService: CatsService,
    private router: Router
    ){
    
  }
  onSubmit(form: NgForm){
    console.log(form);
    const cat = form.value as CatForm;
    this.catService.add(cat);
    form.reset();
    this.router.navigate(['preview']);
  }
  ngOnInit(): void {
  }

}
