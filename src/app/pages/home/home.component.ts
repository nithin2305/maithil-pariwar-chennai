import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [
    'assets/image_10.jpg',
    'assets/image_11.jpg',    
    'assets/image_5.jpg',
    'assets/image_6.jpg',
    'assets/image_7.jpg',
    'assets/image_9.jpg','assets/image_1.jpg',
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    // Automatically move to the next image every 5 seconds
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

 nextImage() {
  const carouselImage = document.querySelector('.carousel-image') as HTMLElement;
  if (!carouselImage) {
    console.error('Carousel image element not found');
    return;
  }
  carouselImage.style.transform = 'translateX(-100%)'; // Slide left
  setTimeout(() => {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    carouselImage.style.transition = 'none';
    carouselImage.style.transform = 'translateX(100%)'; // Reset position
    setTimeout(() => {
      carouselImage.style.transition = 'transform 0.5s ease-in-out';
      carouselImage.style.transform = 'translateX(0)'; // Slide back to center
    });
  }, 3000);
}
  prevImage() {
    const carouselImage = document.querySelector('.carousel-image') as HTMLElement;
    carouselImage.style.transform = 'translateX(100%)'; // Slide right
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      carouselImage.style.transition = 'none';
      carouselImage.style.transform = 'translateX(-100%)'; // Reset position
      setTimeout(() => {
        carouselImage.style.transition = 'transform 0.5s ease-in-out';
        carouselImage.style.transform = 'translateX(0)'; // Slide back to center
      });
    }, 500);
  }
  goToImage(index: number) {
    this.currentIndex = index;
  }
}