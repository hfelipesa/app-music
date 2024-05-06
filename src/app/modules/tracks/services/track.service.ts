import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<any> = of([])

  constructor() {
    const {data}:any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observe)=>{
     
    const  trackExample: TrackModel={
      _id:9,
      name:'Leve',
      album:'Cartel de santa',
      url:'http',
      cover:'https://wallpapercave.com/wp/wp4252089.jpg'
         
    }

    setTimeout(()=>{
      observe.next([trackExample])
    },3500)
    })
   }
}
