/*
EXEMPLE de LA FONCTION filter en Javascript.
3 écritures :
- explicite
- one ligne
- arrow function
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

.filter() nous permet de filtrer un array selon une fonction de filtre et retourne le array filtré.
http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html


// Solution 1 : Ecrire la fonction filter de façon explicite
var friends = [
  {isActive:false, firstname: 'Marie', phone: '0688546622', address: '22 rue de l\'Elysée', cp:'75015', myRequest : false, timestamp: 1476264134 },
  {isActive:false, firstname: 'Noah', phone: '0752824525', address: '2 allée des roses', cp:'93200',myRequest : false, timestamp: 1460256014},
  {isActive:false, firstname: 'Bill', phone: '0621554738', address: '77 Avenue du Général de Gaulle', cp:'75008',myRequest : true, timestamp: 1469022000},
  {isActive:false, firstname: 'Steve', phone: '0657825424', address: '1 rue Charles Tillon', cp:'93300',myRequest : false, timestamp: 1473082800 }
];
function recherche(friend) {
    return friend.firstname.toLowerCase().includes('a');
}
function myFunction() {
  friends = friends.filter(recherche);
  console.log(friends);
}
myFunction();

------------------------------------------------------------

Solution 2 : écrire le filtre en 1 ligne
var filterFriends = friends.filter(function(friend) {
  return (friend.firstname.includes("M"));
});
console.log(filterFriends);

------------------------------------------------------------

Solution 3 : écrire le filtre avec les arrow functions
var filterFriends = friends.filter(
  friend => friend.firstname.toLowerCase().includes('a')
);
console.log(filterFriends);

*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
  // pure: false
})

export class SearchPipe implements PipeTransform {

   transform(value, param) {
     if(param == undefined) {return value}
     else {
     return value.filter((item) =>item.firstname.toLowerCase().includes(param));
     }
   }


}
