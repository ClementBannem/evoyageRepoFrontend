import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(evenmt: any, search: any): any {
    if(search === undefined) return evenmt;

    return evenmt.filter(function(e){
      return e.typeE.toLowerCase().includes(search.toLowerCase());
    })
  }

}
