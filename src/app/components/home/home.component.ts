import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  multiSlideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  multiSlideImages: { img: string }[] = [
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
    {
      img: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg',
    },
  ];

  multiSlideOffers: { img: string }[] = [
    { img: '../../../assets/images/offer5_500.webp' },
    { img: '../../../assets/images/offer5_500.webp' },
    { img: '../../../assets/images/offer5_500.webp' },
    { img: '../../../assets/images/offer5_500.webp' },
    { img: '../../../assets/images/offer5_500.webp' },
    { img: '../../../assets/images/offer5_500.webp' },
  ];

  multiSlideCarImages: any[] = [
    {
      carName: 'Maruti Brezza 2024',
      img: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      availabilityDate: '16 Feb 2025',
      isNew: true,
      isHybrid: true,
      fuelSavings: 15,
      price: 30460,
      oldPrice: 32647,
    },
    {
      carName: 'Maruti Swift 2024',
      img: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      fuelType: 'Diesel',
      transmission: 'Manual',
      availabilityDate: '20 Feb 2025',
      isNew: true,
      isHybrid: true,
      fuelSavings: 18,
      price: 28990,
      oldPrice: 30647,
    },
    {
      img: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/open-feb24/Grand+Vitara_02.png',
    },
    {
      img: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/open-feb24/Grand+Vitara_02.png',
    },
    {
      img: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/open-feb24/Grand+Vitara_02.png',
    },
    {
      img: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/open-feb24/Grand+Vitara_02.png',
    },
  ];
}
