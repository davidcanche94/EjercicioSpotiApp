import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimage'
})
export class UrlimagePipe implements PipeTransform {

  transform(value: any[]): string {

    if(value.length > 0)
      return value[0].url;

    return 'assets/img/noimage.png';
  }

}
