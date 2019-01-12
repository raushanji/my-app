import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

//Declaring a Private instance for Http in the constrcutor to use and execute the same.

  constructor(private httpAgent: HttpClient) { }

  //Delcaring the config URL harc codded with London Data 
  //Later we will change the London data to our choice of city

  weatherDataUrl = 'https://api.openweathermap.org/data/2.5/find?q=London&APPID=7fd80c41f955a125e28423fc596bd265';

  weatherDataUrlCity : string;

  customCityUrl(city):string{
    let Url1st = 'https://api.openweathermap.org/data/2.5/find?q=';
    let Url2nd = '&APPID=0c31508c95be143d704e876cd1608c09';
    return  this.weatherDataUrlCity = Url1st+city+Url2nd;
  }

  getWeatherDatab(): Observable<any> {
    return this.httpAgent.get(this.weatherDataUrl)
      .pipe(catchError(this.errorHandler));
  }



  getWeatherData(city): Observable<any> {
    this.customCityUrl(city);
    return this.httpAgent.get(this.weatherDataUrlCity)
    .pipe(catchError(this.errorHandler));

  }

  errorHandler(error:HttpErrorResponse){
    
    return throwError(error.message || "ServerCommunication  Error")
  }



}
