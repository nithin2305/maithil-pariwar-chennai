import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent {
  images = [
    { src: 'assets/image1.jpg', alt: 'Event 1' },
    
    { src: 'assets/image3.jpg', alt: 'Event 3' },
    { src: 'assets/image4.jpg', alt: 'Event 4' },
    { src: 'assets/image5.jpg', alt: 'Event 5' },
    { src: 'assets/image6.jpg', alt: 'Event 6' },
    { src: 'assets/image7.jpg', alt: 'Event 7' },
    { src: 'assets/image8.jpg', alt: 'Event 8' },
    { src: 'assets/image9.jpg', alt: 'Event 9' },
    { src: 'assets/image10.jpg', alt: 'Event 10' },
    { src: 'assets/image11.jpg', alt: 'Event 11' },
    { src: 'assets/image12.jpg', alt: 'Event 12' },
    { src: 'assets/image13.jpg', alt: 'Event 13' },
    { src: 'assets/image14.jpg', alt: 'Event 14' },
    { src: 'assets/image15.jpg', alt: 'Event 15' },
    { src: 'assets/image16.jpg', alt: 'Event 16' },
    { src: 'assets/image17.jpg', alt: 'Event 17' },
    { src: 'assets/image18.jpg', alt: 'Event 18' },
    { src: 'assets/image19.jpg', alt: 'Event 19' },
    { src: 'assets/image20.jpg', alt: 'Event 20' },
    { src: 'assets/image21.jpg', alt: 'Event 21' },
    { src: 'assets/image22.jpg', alt: 'Event 22' },
    { src: 'assets/image23.jpg', alt: 'Event 23' },
    { src: 'assets/image24.jpg', alt: 'Event 24' },
    { src: 'assets/image25.jpg', alt: 'Event 25' },
    { src: 'assets/image26.jpg', alt: 'Event 26' },
    { src: 'assets/image27.jpg', alt: 'Event 27' },
    { src: 'assets/image28.jpg', alt: 'Event 28' },
    { src: 'assets/image29.jpg', alt: 'Event 29' },
    { src: 'assets/image30.jpg', alt: 'Event 30' },
    { src: 'assets/image31.jpg', alt: 'Event 31' },
    { src: 'assets/image32.jpg', alt: 'Event 32' },
    { src: 'assets/image33.jpg', alt: 'Event 33' },
    { src: 'assets/image34.jpg', alt: 'Event 34' },
    { src: 'assets/image35.jpg', alt: 'Event 35' },
    { src: 'assets/image36.jpg', alt: 'Event 36' },
    { src: 'assets/image37.jpg', alt: 'Event 37' },
    { src: 'assets/image38.jpg', alt: 'Event 38' },
    { src: 'assets/image39.jpg', alt: 'Event 39' },
    { src: 'assets/image40.jpg', alt: 'Event 40' },
    { src: 'assets/image41.jpg', alt: 'Event 41' },
    { src: 'assets/image42.jpg', alt: 'Event 42' },
    
  ];

  currentIndex: number = 0;

  openModal(index: number): void {
    this.currentIndex = index;
    const modal = document.querySelector('.image-modal') as HTMLElement;
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;

    modalImage.src = this.images[this.currentIndex].src;
    modal.classList.add('active');
  }

  closeModal(): void {
    const modal = document.querySelector('.image-modal') as HTMLElement;
    modal.classList.remove('active');
  }

  nextImage(event: Event): void {
    event.stopPropagation(); // Prevent closing the modal when clicking the button
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;
    modalImage.src = this.images[this.currentIndex].src;
  }

  prevImage(event: Event): void {
    event.stopPropagation(); // Prevent closing the modal when clicking the button
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    const modalImage = document.getElementById('modal-image') as HTMLImageElement;
    modalImage.src = this.images[this.currentIndex].src;
  }
}