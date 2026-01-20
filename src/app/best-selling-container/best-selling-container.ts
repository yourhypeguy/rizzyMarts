import { Component, signal, OnInit, OnDestroy, NgZone, Inject } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';  
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-best-selling-container',
  imports: [CommonModule],
  templateUrl: './best-selling-container.html',
  styleUrl: './best-selling-container.css',
})
export class BestSellingContainer implements OnInit, OnDestroy {
  //list of products
products = [
  {image: '/assets/25kg_kingsOil.png', name: '25l Kings-Oil', price: 70000},
  {image: '/assets/royal-stalion-rice.png', name: '10kg Rice "Royal-Stallion"', price: 40000},
  {image: '/assets/rose-carla-tissue-single.png', name: 'Bag of Rose Tissue', price: 1000},
];

//track which product is showing
currentIndex = signal(0);

//interval reference (IMPORTANT FOR STOPPING MEMORY LEAKS)
intervalId: any;

constructor(private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit() {
  this.startAutoSlide();
}

ngOnDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}

//automatically change product every 3 seconds
startAutoSlide() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => this.nextProduct());
      }, 3000);
    });
  }

//move to next product
nextProduct() {
this.currentIndex.update(i => (i + 1) % this.products.length);
}

//arrow to previous product
prevProduct() {
  this.currentIndex.update(i => (i - 1 + this.products.length) % this.products.length); 
}


}
