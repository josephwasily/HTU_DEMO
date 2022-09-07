import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import {from, map, of, switchMap} from 'rxjs'
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activitiesCollection: AngularFirestoreCollection<Activity>;
  currentUserActvities$? : Observable<Activity[] | null | undefined>;
  
  constructor(private firestore:AngularFirestore,
    private authService: AuthService) 
  
  {
    this.activitiesCollection = this.firestore.collection('activities');
    this.currentUserActvities$ = this.authService.userState$
    .pipe(
      switchMap((data)=> {
          
          if(data){
            console.log('getting activities for company', data.uid);
            return this.getCompanyActivites(data?.uid);
          }
          else {
            return of(null);
          }
      }),
      // map((data)=> {
      //     data?.forEach(obj => {
          
      //     });
      // })
    )
   }

  // getAll() : Observable<ProfileData[]> {
  //     return collectionData(this.profilesCollection, {idField:'id'}) as Observable<ProfileData[]>;
  // }
  // currentUser$?: Observable<ProfileData | null | undefined>  ;
  get(id: string){
      // return from(this.profilesCollection.ref.doc('/'+id).get());
    return from(this.activitiesCollection.doc<Activity>(id).get());
  }

  getCompanyActivites(companyId: string){
    return this.firestore.collection<Activity>('activities', ref=> ref.where("companyId", '==', companyId)).valueChanges({'idField':'id'}); 
  }
  create(activity: Activity){
    //  return addDoc(this.profilesCollection,profile);
   return from(this.activitiesCollection.add(activity));
  }

  update(activity: Activity){
    // const docReference = doc(this.firestore, 'profiles/'+profile.id);
    // return updateDoc(docReference, {...profile});
    return from(this.activitiesCollection.doc(activity.id).update({...activity}));
  }

  addApplicant(activityId: string){
    this.activitiesCollection.doc(activityId).collection('applicants').add({
      applicantId: 'asdasdad',
      approved: false
    });
  }
  getApplicant(activityId: string){
    return this.firestore.collection<Activity>('activities').doc(activityId).collection<ActivityApplicant>('applicants').valueChanges();
  }
  approveApplicant(activityApplicant: ActivityApplicant){
    return from(this.activitiesCollection.doc(activityApplicant.activityId).collection('applicants').doc(activityApplicant.id).update(activityApplicant));
  }
  delete(id: string){
    // const docReference = doc(this.firestore, 'profiles/'+id);
    // return deleteDoc(docReference);
    return from(this.activitiesCollection.doc(id).delete());

  }

}
export interface Activity {
  id?: string,
  name: string, 
  description: string,
  range: {
    start?: Date | null | undefined,
    end?: Date | null | undefined
  },
  companyId: string
}

export interface ActivityApplicant {
  id?: string,
  applicantUserId: string,
  activityId: string, 
  applicantName: string, 
  applicantImageUrl: string,
  approved: boolean
};