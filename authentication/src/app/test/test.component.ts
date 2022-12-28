import { Component, OnInit } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  obs$ = fromEvent(document, 'click');
  data = [{"name":"ahmad", "isActive": true},{"name":"ahmad", "isActive": true}]
  constructor() { }

  ngOnInit(): void {
     
      this.obs$.subscribe((event)=> console.log(event));

  }

}
