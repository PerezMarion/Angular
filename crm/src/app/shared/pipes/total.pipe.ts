import { Pipe, PipeTransform } from '@angular/core';

// décorateur
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, coef: number, tva?: number): number {
    // value (premier argument) correspond à l'argument noté à gauche du pipe et coef et va correspondent aux autres arguments notés à droite
    // console.log(value);
    // console.log(args);
    if(tva){
      return value*coef*(1+tva/100);
    }
    return value*coef;
  }

}