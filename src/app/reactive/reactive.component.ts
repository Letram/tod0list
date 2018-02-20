import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

declare var $:any;

@Component({
  selector: 'app-reactive',
  template: `
    <input type="text" class="form-control"
    id="search"
    placeholder="Busca ...">
  `
})
export class ReactiveComponent implements OnInit {
  private flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  constructor() {
    console.log(new Observable());
  }

  ngOnInit() {
    var keyups = Observable.fromEvent($("#search"), 'keyup')
      .map((e:any)=>e.target.value)
      //salida del map(e) -> filter(text)
      .filter(text => text.length > 3)
      .debounceTime(1000)
      .distinctUntilChanged()
      //salida del filter(text) -> flatMap(searchTerm)
      .flatMap(searchTerm =>{
        let promesa = $.getJSON(this.flickrAPI,{
          tags: searchTerm,
          tagmode: "all",
          format: "json"
        });
        let observable = Observable.fromPromise(promesa);
        return observable;
      });

    keyups.subscribe(
      (data:any)=>console.log(data),
      (error:any)=>console.log(error),
      ()=>console.log("Completado")
    )
  }

}
