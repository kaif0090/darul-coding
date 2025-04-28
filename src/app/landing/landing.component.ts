import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  showButton: boolean = false;

  ngAfterViewInit() {
    // Set a timeout to show the button after 5 seconds
    setTimeout(() => {
      this.showButton = true;
    }, 5000);
  }

  onVideoEnd() {
    // This function can be used if you want to do something when the video ends
  }

  onEnter() {
    // Logic to navigate to the next page or perform an action
    console.log('Enter button clicked');
  }
}
