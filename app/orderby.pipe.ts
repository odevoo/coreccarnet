// Exercice : créer un pipe orderBy
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

 /*
 AIDE :
 var items = [
   { name: "edward", value: 21 },
   { name: "sharpe", value: 37 },
   { name: "and", value: 45 },
   { name: "the", value: -12 },
   { name: "magnetic" },
   { name: "zeros", value: 37 }
 ];

 function compare(a,b) {
   if (a.name < b.name)
     return -1;
   if (a.name > b.name)
     return 1;
   return 0;
 }

 items.sort(compare);
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  //pure: false
})

export class OrderbyPipe implements PipeTransform {
  transform(value, param) {
    //return value.filter((item) =>item.firstname.toLowerCase().includes(param));

    // function compare(a,b) {
    //   if (a.firstname < b.firstname)
    //     return -1;
    //   if (a.firstname > b.firstname)
    //     return 1;
    //   return 0;
    // }

    // return value.sort(compare)
    
    return value.sort(function (a,b) {
      if (a[param] < b[param])
        return -1;
      if (a[param] > b[param])
        return 1;
      return 0;
    });



    }
  }
