import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any>= new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!:HTMLAudioElement

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK =>{
      if(responseOK){
        this.setAudio(responseOK)
      }
    })
  }  

  ngOnInit():void{

  }

  public setAudio(track:TrackModel):void{
    this.audio.src = track.url
    this.audio.play()
 }

}



   /*  this.myObservable1$ = new Observable (
      (observer:Observer<any>)=>{
        observer.next('💎')

        setTimeout(()=>{
         observer.complete()   
        }, 2500)
      }
    ) */
  
      //Observable
 /*  myObservable1$: Subject<any> = new Subject();
 */
