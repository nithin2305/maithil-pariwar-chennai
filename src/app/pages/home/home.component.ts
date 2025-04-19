import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   images = [
    'assets/image1.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg',
    'assets/image7.jpg',
    'assets/image8.jpg',
    'assets/image9.jpg',
    'assets/image10.jpg',
    'assets/image11.jpg',
    'assets/image12.jpg',
    'assets/image13.jpg',
    'assets/image14.jpg',
    'assets/image15.jpg',
    'assets/image16.jpg',
    'assets/image17.jpg',
    'assets/image18.jpg',
    'assets/image19.jpg',
    'assets/image20.jpg',
    'assets/image21.jpg',
    'assets/image22.jpg',
    'assets/image23.jpg',
    'assets/image24.jpg',
    'assets/image25.jpg',
    'assets/image26.jpg',
    'assets/image27.jpg',
    'assets/image28.jpg',
    'assets/image29.jpg',
    'assets/image30.jpg',
    'assets/image31.jpg',
    'assets/image32.jpg',
    'assets/image33.jpg',
    'assets/image34.jpg',
    'assets/image35.jpg',
    'assets/image36.jpg',
    'assets/image37.jpg',
    'assets/image38.jpg',
    'assets/image39.jpg',
    'assets/image40.jpg',
    'assets/image41.jpg',
    'assets/image42.jpg',
  ];
  

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    // Automatically move to the next image every 5 seconds
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
}