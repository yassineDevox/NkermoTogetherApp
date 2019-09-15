import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Servicepublication {

  url : String = "http://localhost:8090/";

  constructor(private http: HttpClient) { }

  getAllPublications(){
    return this.http.get(this.url+"api/pub/all?numberPage=0&order=desc&size=11");
  }
  getAllPublicationsByEtat(etat){
    return this.http.get(this.url+"api/pub/byetat?etat="+etat+"&numberPage=0&order=desc&size=11");
  }
  //return list of Suggestions with 6 items
  //suggestion's props (fullName & usrAvatar & idUsr for logic stuff)
  getAllSuggestions(){
    return this.http.get(this.url+"api/sug/all?numberPage=0&order=desc&size=11");
  }           
  //return list of trends with 4 items
  //trend's properties(img & link)
   getAllMyRecentlySaved(){
    return this.http.get(this.url+"api/pub/recentlySaved?numberPage=0&order=desc&size=4");
  }
}
