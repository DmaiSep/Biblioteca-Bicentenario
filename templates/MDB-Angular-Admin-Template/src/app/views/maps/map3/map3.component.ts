import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map3',
  templateUrl: './map3.component.html',
  styleUrls: ['./map3.component.scss']
})
export class Map3Component implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 51.678418,
    lng: 7.809007,
  };

  markers = [
    { lat: 40.7128, lng: -74.0060 },
    { lat: 43.647833, lng: -79.419011 },
    { lat: -22.913342, lng: -43.193219 },
    { lat: 19.427616, lng: -99.137628 },
    { lat: 52.231726, lng: 21.005576 },
    { lat: 35.688340, lng: 139.739572 },
  ];

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
  };

  constructor() { }

  ngOnInit() {
  }

}
