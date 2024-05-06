import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl:'./tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnDestroy {
  TracksTrending: Array<TrackModel>=[]
  TracksRandom: Array<TrackModel>=[]

  listObserver$:Array<Subscription>=[]

  constructor(private tracksService:TrackService){}

  ngOnInit():void{
    const observer$1 = this.tracksService.dataTracksTrending$
    .subscribe(response => {
      this.TracksTrending = response
      console.log('Tracks', response)
    })

    const observer$2 = this.tracksService.dataTracksRandom$
    .subscribe(response => {
      this.TracksRandom = response
      console.log('Tracks', response)
    })
    this.listObserver$ = [observer$1,observer$2]
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach( u => u.unsubscribe())    
  }
}
