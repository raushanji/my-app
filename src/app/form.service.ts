import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  _url = "https://raushan-project-e1c28.firebaseio.com/.json?auth=rDVHka7du001aR3UXcHba0HZh822CFpZB4jNJ2I7";

  constructor(private _http: HttpClient) { }

  submitData(person: Person){
     return this._http.post<any>(this._url, person);
  }
}
