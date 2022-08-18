import { Component, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, Observable, Observer, pipe, Subscription } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  observable: Observable<any> = this.longRunningObservable();
  observer!: Subscription;
  toggleFlag: boolean = false;
  arrayOfPosts: Post[] = [];
  post: Post | undefined;
  constructor(private httpClient: HttpClient){
 
  } 
  toggleObserver(){
    if(this.toggleFlag){
        this.toggleFlag = false;
        this.observer.unsubscribe();
    }
    else {
      this.toggleFlag = true;
      this.observer = this.observable.subscribe(x=> {
        console.log('logging from observer', x);
      });
    }

  }
  ngOnInit(): void {

      // this.longRunningFunction(()=> {
      //     console.log('callback from async longrunning function');
      // });
      // this.longRunningPromise()
      // .then((x)=> {
      //   console.log('callback from async longrunning '+x);
      // }).catch((error)=> {
      //   console.log(error);
      // });
      // const observer1= this.longRunningObservable()
      // .subscribe((x)=> {
      //   console.log('callback from async longrunning '+x);

      // });
      console.log("logging after async code");


      //promise-way to do ajax call
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then((val)=> {

      // });
      
      // .then((data)=> data.json())
      // .then((json)=> console.log(json));
      
      // this.httpClient
      // .get('https://jsonplaceholder.typicode.com/todos/1')
      // .subscribe((data)=> {
      //   console.log(data);
      // });
      //observable-way to do ajax call


      //differences between promises and observable 
      // 1) promises handle single event, but observables handle stream of data events
      // 2) Observer can unsubscribe from observable at any time (to stop recieving emitted events)
      // 3) Promises are executed once called, but observables are lazy (cold), they are executed once they are subscribed to.


      this.anotherObservable().subscribe({
      next: (data)=> {
        console.log(data);
      },
      complete: ()=> {
        console.log('observable is completed from subscriber 1')
      },
      error: (err)=> {
        console.log('error from inside observable', err);
      }
    });

    const arrayObservable = from([1,2,3,4]);
    const observer = {
      complete: ()=> {
        console.log('completed array observable');
      },
      next: (data : any)=> {
        console.log(data);
      },
      error: (error : any)=> {
        console.log(error);
      }
    };
    //arrayObservable.subscribe();
    arrayObservable.pipe(
      filter(x=> x > 1 ),
      map(x=> { return {val: x}}),  
    ).subscribe(observer);


    // ajax http requests using the observable-based httpclient 

    //ajax combine two observables : TODO: FIX the issue
    // this.httpClient.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
    // .pipe(
    //   x=>this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/'+ x.userId))
    // ).subscribe((data)=> {
    //   console.log(data);
    // })




    

  }
  title = 'observables';

  longRunningFunction(callback: ()=> void){
    setTimeout(callback, 1000);
  }
  longRunningPromise(){
    let x = 'promise';
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(x);
        resolve('123 from promise'); // is ignored because promise is fulfilled
      }, 1000);
    });
  }
  longRunningObservable(){
    let x = 'observable';
    return new Observable((subscriber)=> {
      console.log('running observable');
        setInterval(()=> {
          for(let i=0; i< 5; i++){
            subscriber.next(x); //emit event 
            subscriber.next(i+' from observable'); //emit event 
          }
        },2000);
    });
  }

  anotherObservable(){
    let x = 'observable';
    return new Observable((subscriber)=> {
      console.log('running observable');
        subscriber.error('error happened while doing asynccode in observable');
        for(let i=0; i< 5; i++){
            setTimeout(()=> {
              subscriber.next(i); //emit event 
            }, i*1000);
            if(i == 2){
              setTimeout(()=> {}, 2000); //emit event  
            }
            //after completion is ignored
          }
          //after finishing loop

    });

  }
  
}

export interface Post {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
  user: User
}

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}
