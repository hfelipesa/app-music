import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
    mockCover: TrackModel ={
      cover:'https://imgproxy.ra.co/_/quality:66/h:180/w:180/rt:fill/gravity:sm/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL3NxdWFyZS9naW9saWFzc2lhLmpwZz9kYXRlVXBkYXRlZD0xNTY5MzE1Njc0MDAw',
      name:'Bebe(Oficial)',
      album:'Giolo & Assia',
      url:'http://localhost/tracks.mp3',
      _id:1
    }
}
