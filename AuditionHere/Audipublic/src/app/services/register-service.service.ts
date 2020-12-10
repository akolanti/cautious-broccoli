import { Injectable } from '@angular/core';
import {Actordata} from '../actordata';
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private registerUrl = 'http://localhost:3000/api/register';
  private actorsUrl= 'http://localhost:3000/api/actors';

  constructor(private http:HttpClient) { }

  getActors() :Promise<void | Actordata[]>{

    console.log();
    return this.http.get(this.actorsUrl)
    .toPromise()
    .then(response => response as Actordata[]).
    catch(this.handleError);
    
  }
  createActor(newActor:Actordata):
Promise<void|Actordata>{
  return this.http.post(this.registerUrl,newActor).
  toPromise().then(response=>response as Actordata).
  catch(this.handleError);
}

updateActor(updateActor:Actordata):Promise<void|Actordata>{
  console.log(this.actorsUrl+'/'+updateActor._id);
return this.http.put(this.actorsUrl+'/'+updateActor._id,updateActor).toPromise()
.then(response=>response as Actordata).catch(this.handleError);}

deleteActor(actorId:string):Promise<void|string>
{return this.http.delete(this.actorsUrl+'/'+actorId).toPromise().then(response=>response as string).catch(this.handleError);
}
  private handleError(error: any){console.log("error");
}
}
