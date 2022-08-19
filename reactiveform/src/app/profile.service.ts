import { addDoc, updateDoc, deleteDoc } from '@firebase/firestore';
import { Firestore, CollectionReference, DocumentData, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profilesCollection: CollectionReference<DocumentData>;
  constructor(private firestore:Firestore) 
  
  {
    this.profilesCollection = collection(this.firestore, 'profiles');

   }

  getAll() : Observable<Profile[]> {
      return collectionData(this.profilesCollection, {idField:'id'}) as Observable<Profile[]>;
  }

  get(id: string){
      const docReference = doc(this.firestore, 'profiles/'+id);
      return docData(docReference,{ idField: 'id' }); 
  }

  create(profile: Profile){
     return addDoc(this.profilesCollection,profile);
  }

  update(profile: Profile){
    const docReference = doc(this.firestore, 'profiles/'+profile.id);
    return updateDoc(docReference, {...profile});
  }
  delete(id: string){
    const docReference = doc(this.firestore, 'profiles/'+id);
    return deleteDoc(docReference);
  }
  // id: number = 2; 
  // profiles : Profile[] = [
  //   {
  //     id: 1,
  //     firstName: 'ahmad',
  //     lastName: 'qaisi',
  //     address: {
  //       city: 'salt',
  //       state: 'jordan'
  //     }
  //   }
  // ]

  // getProfiles(): Observable<Profile>{
  //     return from(this.profiles);
  // }
  // addProfile(profile: Profile){
  //   profile.id = this.id+1;
  //   this.profiles.push(profile);
  // }
  // removeProfile(id: number){
  //   console.log(id);
  //   console.log(this.profiles, 'array before removing element');
  //   this.profiles = this.profiles.filter((value)=> {
  //     value.id != id;
  //   });
  //   console.log(this.profiles,'from service');  
  // }
  // updateProfile(profile: Profile){
  //     const indexOfProfile = this.profiles.findIndex((data)=> data.id == profile.id);
  //     this.profiles[indexOfProfile] = profile;
  // }

  // getProfile(id: number){
  //   return this.profiles.filter((data)=> data.id == id)[0];
  // }
  
}

export interface Profile {
  id?: string,
  firstName: string, 
  lastName: string, 
  address : {
    city: string, 
    state: string
  }
}
