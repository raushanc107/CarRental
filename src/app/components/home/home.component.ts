import { AfterViewInit, Component, inject } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City } from '../../models/ciltyList.model';
import { CityFilterModelComponent } from '../car-list-filter/city-filter/city-filter-model/city-filter-model.component';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  currentselection: City;
  private modalService = inject(NgbModal);
  constructor(private filterService: FilterService) {
    this.filterService.currentselectionSubject.subscribe((data) => {
      this.currentselection = data;
    });
  }

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
  ];

  openModel() {
    const modalRef = this.modalService.open(CityFilterModelComponent);
    modalRef.componentInstance.currentselection = this.currentselection;

    modalRef.result
      .then((result) => {
        if (result) {
          this.filterService.currentselectionSubject.next(result);
        }
      })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }
}
