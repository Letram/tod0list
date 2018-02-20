import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDone',
  pure: false
})
export class FiltroDonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const done = args;
    console.log("Value: ", value);
    if(!done)return value;
    if(!value)return null;
    //como queremos hacer un filtro para las cosas que están completas o no, a cada elemento del array value (cada elemento se llama item)
    //hay un return implicito en el item-done (siempre será true o false.)
    let filtro = value.filter(item => item.done==!done);
    return filtro;
  }

}
