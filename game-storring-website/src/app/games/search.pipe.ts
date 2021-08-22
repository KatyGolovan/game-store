import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, game: any) {

    if (!game) return value;
    return value.filter((v:any) => v.name.toLowerCase().indexOf(game.toLowerCase()) > -1 || v.price.toLowerCase().indexOf(game.toLowerCase()) > -1 || v.description.toLowerCase().indexOf(game.toLowerCase()) > -1)

  }

}
