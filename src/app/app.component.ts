import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: 
  './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sid-App';
  photos = [
  { url: 'assets/photos/1.jpg', caption: 'Family Picnic' },
  { url: 'assets/photos/2.jpg', caption: 'Birthday Celebration' },
  { url: 'assets/photos/3.jpg', caption: 'Birthday Celebration' },
  { url: 'assets/photos/4.jpg', caption: 'Birthday Celebration' },
  // Add more photos here
];
}
