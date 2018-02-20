import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date();
  mostrarTodas=true;
  mostrarPorPrioridad=true;
  model = {
    user: "Juan",
    items: [
      {action: "Comprar Flores", done: false, prioridad: 5},
      {action: "Buscar Zapatos", done: true, prioridad: 2},
      {action: "Recoger entradas", done: false, prioridad: 9},
      {action: "Llamar a Juan", done: false, prioridad: 6}
    ]
  };
  constructor(){
    //this.ordenaTareas();
  }

  TnIncompletas(){
    let count = 0;
    this.model.items.forEach(
      (item, index) => !item.done ? count++ : true
    );
    return count;
  }

  addItem(tarea) {
    this.model.items.push({action: tarea, done: false, prioridad: 5});
    // this.ordenaTareas();
  }

  removeItem(tarea){
    let index = this.model.items.findIndex(this.findTarea, tarea.action);
    console.log(index);
    if(index > -1) this.model.items.splice(index, 1);
  }

  findTarea(elemento){
    //this, cuando se llama, es igual POR SINTAXIS a event.tarea
    console.log("This: ", this);
    console.log("Elemento: ", elemento);
    return elemento.action == this;
  }
  nuevaPrioridad(event){
    console.log(event);
    let indice = this.model.items.findIndex(this.findTarea, event.tarea);
    this.model.items[indice].prioridad = event.prioridad;
  }

  // ordenaTareas(){
  //   this.model.items.sort((a:any, b:any)=>{
  //     if(a.action.toLowerCase() < b.action.toLowerCase()){
  //       return -1;
  //     } else if(a.action.toLowerCase() > b.action.toLowerCase()){
  //       return 1;
  //     } else{return 0}
  //   });
  // }
}
