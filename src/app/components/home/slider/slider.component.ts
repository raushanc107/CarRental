import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class SliderComponent {

  @Input() multiSlideConfig = {};
  @Input() multiSlideImages: any[] = [];
 
}
