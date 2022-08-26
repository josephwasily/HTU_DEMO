import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm = this.fb.group({

  // })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
