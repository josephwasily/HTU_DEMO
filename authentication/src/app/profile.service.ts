import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import {from, map, of, switchMap} from 'rxjs'
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesCollection: AngularFirestoreCollection<ProfileData>;
  userState$? : Observable<ProfileData | null | undefined>;
  isLoggedInUserRegularProfile$ = this.authService.userState$.pipe(
    switchMap((userCredentials)=> {
      if(userCredentials){
        // might be regular user or company
          return this.profilesCollection.doc(userCredentials.uid)
          .get()
          .pipe(switchMap((profile)=> {
            if(profile.exists) return of(true);
            else return of(false); 
          }));
      }
      else {
        return of(false);
      }
    })
  )
  constructor(private firestore:AngularFirestore,
    private authService: AuthService) 
  
  {
    this.profilesCollection = this.firestore.collection('profiles');
    this.userState$ = this.authService.userState$
    .pipe(
      switchMap((data)=> {

          if(data){
            return this.get(data?.uid).pipe(
              map(userObj =>  userObj.data())
            );
          }
          else {
            return of(null);
          }
         
      })
    )
   }

  // getAll() : Observable<ProfileData[]> {
  //     return collectionData(this.profilesCollection, {idField:'id'}) as Observable<ProfileData[]>;
  // }
  // currentUser$?: Observable<ProfileData | null | undefined>  ;
  get(id: string){
      // return from(this.profilesCollection.ref.doc('/'+id).get());
    return from(this.profilesCollection.doc<ProfileData>(id).get());
  }

  create(profile: ProfileData){
    //  return addDoc(this.profilesCollection,profile);
   return from(this.profilesCollection.doc(profile.uid).set(profile));
  }

  update(profile: ProfileData){
    // const docReference = doc(this.firestore, 'profiles/'+profile.id);
    // return updateDoc(docReference, {...profile});
    return from(this.profilesCollection.doc(profile.uid).update({...profile}));
  }

  delete(id: string){
    // const docReference = doc(this.firestore, 'profiles/'+id);
    // return deleteDoc(docReference);
    return from(this.profilesCollection.doc(id).delete());

  }
}

interface ProfileData {
    uid?: string,
    fullName?: string, 
    age?: number | undefined | null,
    email: string 
}