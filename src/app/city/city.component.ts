import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityList = [];


  constructor(private list: UsersService, private weatherDataService: WeatherService) {
    this.getWeatherDataHTML();
  }

  ngOnInit() {
    this.list.getCityList().subscribe(
      (data: any) => {
        this.cityList = data;
      }
    )
  }
  public searchText: string;

  weatherData: any
  errorMessage: any
  city: any = 'London';

  getWeatherDataHTML() {
    this.weatherDataService.getWeatherDatab()
      .subscribe(data => this.weatherData = JSON.stringify(data, undefined, 4),
        error => this.errorMessage = error);

    console.log('Service Called')
  }

  getCityWeatherDatas(cityName) {
    this.weatherDataService.getWeatherData(cityName.toUpperCase())
      .subscribe(data => this.weatherData = JSON.stringify(data, undefined, 4),
        error => this.errorMessage = error);

    console.log('Service Called')
  }

  setCity(cityName) {
    console.log(cityName);
    this.city = cityName;
    this.getCityWeatherDatas(this.city)
  }

  reset() {
    this.city = 'London';
    this.getCityWeatherDatas(this.city);
  }





}
