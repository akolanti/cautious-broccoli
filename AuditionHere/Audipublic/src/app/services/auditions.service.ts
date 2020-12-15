import { Injectable } from '@angular/core';
import {Auditions} from '../auditions';
import{HttpClient,HttpResponse} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuditionsService {

  private AudiUrl='http://localhost:3000/api/auditions';
  constructor(private http:HttpClient) { }
  getAuditions() : Promise<void | Auditions[]>{
    return this.http.get(this.AudiUrl)
    .toPromise()
    .then(response => response as Auditions[])
    .catch(this.handleError);}
    private handleError(error: any){
      console.log("error");
    }
    getSingleAudition(bookId:string):Promise<void|Auditions>{
      return this.http.get(this.AudiUrl+'/'+bookId)
      .toPromise()
      .then(response=>response as Auditions)
      .catch(this.handleError);
}
}
