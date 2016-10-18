// partie 1 : on importe les dépendances
import { Component } from '@angular/core';
import { SearchPipe } from './search.pipe';
import { OrderbyPipe } from "./orderby.pipe"
import { ContactformComponent } from './contactform.component';

/* partie 2 : on "décore" notre component avec les élément suivants:
    selector, template, styles[], pipes[], directives[]
*/
@Component({
  selector: 'my-app',
  pipes: [SearchPipe, OrderbyPipe],
  directives: [ContactformComponent],
  styles: [`
    .myReq {color: #B52E31}
    h1 {background: #e5e5e5;}
    ul {margin-left:20px}
  `],
  templateUrl: '.app.component.html'

})

export class AppComponent {

  // On initialise les variables dont le component a besoin pour fonctionner
  details:Object;
  firstname = "Fred";
  friends = [
    {isActive:false, firstname: 'Marie', phone: '0688546622', address: '22 rue de l\'Elysée', cp:'75015', myRequest : false, timestamp: 1476264134, image: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
    {isActive:false, firstname: 'Noah', phone: '0752824525', address: '2 allée des roses', cp:'93200',myRequest : false, timestamp: 1460256014, image: "https://randomuser.me/api/portraits/thumb/men/61.jpg"},
    {isActive:false, firstname: 'Bill', phone: '0621554738', address: '77 Avenue du Général de Gaulle', cp:'75008',myRequest : true, timestamp: 1469022000, image: "https://randomuser.me/api/portraits/thumb/men/69.jpg"},
    {isActive:false, firstname: 'Steve', phone: '0657825424', address: '1 rue Charles Tillon', cp:'93300',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/46.jpg" },

    {isActive:false, firstname: 'Claire', phone: '0622353542', address: '47 rue du Maine', cp:'75014',myRequest : false, timestamp: 1473082800, image: false },
    {isActive:false, firstname: 'Nathalie', phone: '0784559975', address: '155 Avenue de Flandre', cp:'75019',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/18.jpg" },
    {isActive:false, firstname: 'Mark', phone: '0756458211', address: '10 Bld de Montmorency', cp:'75016',myRequest : false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/86.jpg" }
  ];
  search:any;

  totalResults() {
    // return this.friends.length;
    let sum = 0;
    for(let friend in this.friends) {
      sum++ ;
    }
    return sum;
  }

  /*
    Fonction: deleteFriendRequest()
    Description: Permet de supprimer une friend request dans le tableau friends
    @param: prend en paramètre l'objet friend
  */
  deleteFriendRequest(friend) {
    if(confirm('Voulez-vous vraiment supprimer ' + friend.firstname + ' : index ' + this.friends.indexOf(friend))) {
      let index = this.friends.indexOf(friend);
      if (index > -1) { this.friends.splice(index, 1) }
    }
    this.hideDetails();
  }

  /*
    Fonction: showDetails()
    Description: Permet d'afficher les détails d'un contact
  */
  showDetails(friend) {
    console.log(friend);
    friend.isActive = true;
    this.details = friend;
  }

  /*
    Fonction: delDetails()
    Description: Permet de cacher les détails d'un contact de l'affichage courant
  */
  hideDetails() {
    this.details = false;
  }

  /*
    Fonction addNewFriend()
    Permet d'ajouter un friend dans le tableau friends
    @param : prend en paramètre l'objet newFriend
  */
  newFriend: Object = {};

  addNewFriend(newFriend) {
    newFriend.isActive = false;
    newFriend.myRequest = true;
    newFriend.timestamp = Math.floor(Date.now() / 1000);
    if("firstname" in this.newFriend) {
      console.log(this.newFriend);
      this.friends.push(newFriend);
    }
    else {
      alert('Vous devez spécifier un nom !');
    }
    //  this.form.reset();
  }

debugger;
} // Fin class AppComponent
