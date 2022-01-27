import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tailwind-app';

  popularDestinations: any[] = [];

  ngOnInit(): void {
    this.popularDestinations = [
      {
        city: 'Toronto',
        averagePrice: 120,
        propertyCount: 76,
        imageUrl: '/img/toronto.jpg',
        imageAlt: 'Toronto skyline',
      },
      {
        city: 'Malibu',
        averagePrice: 215,
        propertyCount: 43,
        imageUrl: '/img/malibu.jpg',
        imageAlt: 'Cliff in Malibu',
      },
      {
        city: 'Chicago',
        averagePrice: 130,
        propertyCount: 115,
        imageUrl: '/img/chicago.jpg',
        imageAlt: 'Chicago skyline',
      },
      {
        city: 'Seattle',
        averagePrice: 135,
        propertyCount: 63,
        imageUrl: '/img/seattle.jpg',
        imageAlt: 'Seattle skyline',
      },
    ];
  }
}
