import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-callbackhell',
  template: `
    <input type="text" class="form-control"
    (keyup)="tecla($event)"
    placeholder="Busca ...">
  `
})
export class CallbackhellComponent implements OnInit {
  private text:string = "";
  private t:any;
  private flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  constructor() { }

  ngOnInit() {
  }

  respuesta(data){
    console.log("Respuesta de flickr: ", data);
  }

  debounce(){
    if(this.t)window.clearTimeout(this.t);
    this.t = window.setTimeout(()=>{this.liveSearch()}, 1000);
  }

  tecla(event){
    this.text=event.target.value;
    if(this.text.length < 4)return;
    this.debounce();
  }

  liveSearch(){
    console.log("Texto: ", this.text);
    $.getJSON(this.flickrAPI,{
      tags: this.text,
      tagmode: "all",
      format: "json"
    }, this.respuesta);
  }
}
