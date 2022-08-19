import { ActivatedRoute, Router } from '@angular/router';
import { Profile, ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlStatus, FormGroup, NgForm, Validators } from '@angular/forms';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  statusChanges: FormControlStatus [] = [];
  valueChanges: any [] = [];
  id?: string;
  // form = new FormGroup({
  //   firstName: new FormControl('', [Validators.required,Validators.email]),
  //   lastName: new FormControl('botros'),
  //   address: new FormGroup({
  //       city: new FormControl('amman'),
  //       state: new FormControl('jordan')
  //   })
  // });
  // email = this.fb.control('joseph', Validators.required);
  form = this.fb.group({
       firstName: this.fb.control('',[Validators.required,Validators.email]),
    lastName: this.fb.control('', Validators.required),
    address: this.fb.group({
        city: this.fb.control(''),
        state: this.fb.control('')
    })
  })
  ngOnInit(): void {

    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if(idFromRoute){
      this.id = idFromRoute;

      //prepopulation profile data in form 
      //let profile = this.profileService.getProfile(this.id);
      this.profileService.get(this.id).pipe(
        take(1),
        map(value=> value as Profile)
      ).subscribe((profile)=> {
        this.form.setValue({
          firstName : profile.firstName,
          lastName : profile.lastName,
          address : {
            city : profile.address.city,
            state : profile.address.state
          }
        }); 
      })
     
      
    }
    // this.form.statusChanges.subscribe((data)=> {
    //     this.statusChanges.push(data);
    //     console.log(this.statusChanges);
    // });
    // this.form.valueChanges.subscribe((data)=> {
    //   this.valueChanges.push(data);
    // })
  }

  setValue(){   
    this.form.setValue({
      firstName:'ahmad',
      lastName: 'alqaisi',
      address: {
        city: 'salt',
        state: 'jordan'
      }
  }); 
  }
  patchValue(){
    this.form.patchValue({
      firstName:'ahmad'
    });
  
    
  }
  onSubmit(){
    console.log(this.form);
    console.log(this.form.value);
    let profile = this.form.value as Profile;

    if(this.id != null && this.id != ""){
      //update
      profile.id = this.id;
      //this.profileService.updateProfile(profile);
      this.profileService.update(profile).then(()=> {
        this.navigateToList();
      });
    }
    else {
      //this.profileService.addProfile(this.form.value as Profile);
      this.profileService.create(profile).then(()=> {
        this.navigateToList();
      })
    }
    //save data in service
 
    //navigate to profile lists page
  }
  navigateToList(){
    this.router.navigate(['/profile']);
  }


 
}
