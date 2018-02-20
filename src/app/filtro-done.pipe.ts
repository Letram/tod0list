import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDone',
  pure: false
})
export class FiltroDonePipe implements PipeTransform {

  transform(value: any, mostrarPendientes, mostrarPrioridad): any {
    console.log("Pendientes? ", mostrarPendientes);
    console.log("Por prioridad? ", mostrarPrioridad);
    const done = mostrarPendientes;
    if(!done){
      if(mostrarPrioridad){
        return value.sort(function(a, b){
          return -(a.prioridad - b.prioridad);
        });
      }else return value;
    }
    if(!value)return null;
    //como queremos hacer un filtro para las cosas que están completas o no, a cada elemento del array value (cada elemento se llama item)
    //hay un return implicito en el item-done (siempre será true o false.)
    let filtro = value.filter(item => item.done==!done);
    if(mostrarPrioridad){
      console.log("Antes de la prioridad: ", filtro);
      filtro = filtro.sort(function(a, b){
        return -(a.prioridad - b.prioridad);
      });
      console.log("Después de la ordenación: ", filtro);
    }
    return filtro;
  }

}
