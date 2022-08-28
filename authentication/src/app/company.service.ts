import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import {from, map, of, switchMap} from 'rxjs'
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companiesCollection: AngularFirestoreCollection<CompanyData>;
  userState$? : Observable<CompanyData | null | undefined>;
  isLoggedInUserCompany$ = this.authService.userState$.pipe(
    switchMap((userCredentials)=> {
      if(userCredentials){
        // might be regular user or company
          return this.companiesCollection.doc(userCredentials.uid).get().pipe(
            switchMap(
            (company)=> {
            console.log(company, 'isLoggedInUserCompany' );
            if(company.exists) return of(true);
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
    this.companiesCollection = this.firestore.collection('companies');
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
    return from(this.companiesCollection.doc<CompanyData>(id).get());
  }

  create(company: CompanyData){
    //  return addDoc(this.profilesCollection,profile);
   return from(this.companiesCollection.doc(company.uid).set(company));
  }

  update(profile: CompanyData){
    // const docReference = doc(this.firestore, 'profiles/'+profile.id);
    // return updateDoc(docReference, {...profile});
    return from(this.companiesCollection.doc(profile.uid).update({...profile}));
  }

  delete(id: string){
    // const docReference = doc(this.firestore, 'profiles/'+id);
    // return deleteDoc(docReference);
    return from(this.companiesCollection.doc(id).delete());

  }
}
interface CompanyData {
  uid?: string,
  companyName?: string
  email: string
}
