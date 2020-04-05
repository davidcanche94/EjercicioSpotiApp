import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistas'
})
export class ArtistasPipe implements PipeTransform {

  transform(artistas: any[], ): string {

    let nombres : string = '';

    if(artistas.length > 0){
      for(let index = 0; index < artistas.length ; index++ ){
        nombres += artistas[index].name;

        if( (index + 1) < artistas.length )
          nombres += ' / ';
      }
    }else
      nombres = 'No Data';

    return nombres;
  }

}
