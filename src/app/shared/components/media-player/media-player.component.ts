import { Component,OnDestroy} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnDestroy{
   
    listObserve$:Array<Subscription>=[]
    constructor(public multiMediaService:MultimediaService){}

    ngOnInit() :void{

    /*   this.multiMediaService.trackInfo$.subscribe(
        resp => {
          console.log('Reproduciendo ✔',resp)
        }
      )
 */
/*  const observable1$ = this.multiMediaService.myObservable1$
       .subscribe(
        (respOK)=>{
          console.log('OK 👍')
        },
        (respoFail)=>{'Fail 😒'}
       ) */
      
    }
    ngOnDestroy(): void {
      /* this.listObserve$.forEach(u => u.unsubscribe()) */
    }
  
   
}
