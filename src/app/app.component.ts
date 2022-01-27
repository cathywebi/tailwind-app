import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tailwind-app';

  popularDestinations: any[] = [];
  property: any;

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

    this.property = {
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: "Modern home in city center",
      priceInCents: 190000,
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    };
  }
}
