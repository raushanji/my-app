import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private list : HttpClient) { }

  getCityList(){

     return this.list.get('./assets/city.list.json');   
  }
  


  // getCityList(){

  //  return [
  //   {
  //     "id": 707860,
  //     "name": "Hurzuf",
  //     "country": "UA",
  //     "coord": {
  //       "lon": 34.283333,
  //       "lat": 44.549999
  //     }
  //   },
  //   {
  //     "id": 519188,
  //     "name": "Novinki",
  //     "country": "RU",
  //     "coord": {
  //       "lon": 37.666668,
  //       "lat": 55.683334
  //     }
  //   },
  //   {
  //     "id": 1283378,
  //     "name": "Gorkhā",
  //     "country": "NP",
  //     "coord": {
  //       "lon": 84.633331,
  //       "lat": 28
  //     }
  //   },
  //   {
  //     "id": 1270260,
  //     "name": "State of Haryāna",
  //     "country": "IN",
  //     "coord": {
  //       "lon": 76,
  //       "lat": 29
  //     }
  //   },
  //   {
  //     "id": 708546,
  //     "name": "Holubynka",
  //     "country": "UA",
  //     "coord": {
  //       "lon": 33.900002,
  //       "lat": 44.599998
  //     }
  //   },
  //   {
  //     "id": 1283710,
  //     "name": "Bāgmatī Zone",
  //     "country": "NP",
  //     "coord": {
  //       "lon": 85.416664,
  //       "lat": 28
  //     }
  //   },
  //   {
  //     "id": 529334,
  //     "name": "Mar’ina Roshcha",
  //     "country": "RU",
  //     "coord": {
  //       "lon": 37.611111,
  //       "lat": 55.796391
  //     }
  //   },
  //   {
  //     "id": 1269750,
  //     "name": "Republic of India",
  //     "country": "IN",
  //     "coord": {
  //       "lon": 77,
  //       "lat": 20
  //     }
  //   },
  //   {
  //     "id": 1283240,
  //     "name": "Kathmandu",
  //     "country": "NP",
  //     "coord": {
  //       "lon": 85.316666,
  //       "lat": 27.716667
  //     }
  //   },
  //   {
  //     "id": 703363,
  //     "name": "Laspi",
  //     "country": "UA",
  //     "coord": {
  //       "lon": 33.733334,
  //       "lat": 44.416668
  //     }
  //   },
  //   {
  //     "id": 3632308,
  //     "name": "Merida",
  //     "country": "VE",
  //     "coord": {
  //       "lon": -71.144997,
  //       "lat": 8.598333
  //     }
  //   }];

  // }
}
