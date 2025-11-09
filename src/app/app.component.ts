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
  { url: 'assets/photos/2.JPG', caption: 'Birthday Celebration' } ,
  { url: 'assets/photos/3.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/4.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/5.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/6.JPG', caption: 'Birthday Celebration' } ,   
  { url: 'assets/photos/8.JPG', caption: 'Birthday Celebration' } , 
  {url: 'assets/photos/7.JPG', caption: 'Birthday Celebration' } ,
  { url: 'assets/photos/9.JPG', caption: 'Family Picnic' },
  { url: 'assets/photos/10.JPG', caption: 'Birthday Celebration' } ,
  { url: 'assets/photos/11.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/12.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/13.JPG', caption: 'Birthday Celebration' } , 
  { url: 'assets/photos/14.JPG', caption: 'Birthday Celebration' } ,   
  { url: 'assets/photos/15.JPG', caption: 'Birthday Celebration' } , 
   {url: 'assets/photos/16.JPG', caption: 'Birthday Celebration' } ,


  
  // Add more photos here
];
}
