import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

@Component({
  selector: 'add-contact-form',
  template: `
  <form [ngFormModel]="addContactForm" (submit)="addNewFriend($event)">
    <input (focus)="toggle(true)" ngControl="firstname" placeholder="Prénom" type="text" />
    <input *ngIf="fullForm" ngControl="phone" placeholder="Téléphone (optionnel)" type="text" />
    <input *ngIf="fullForm" ngControl="address" placeholder="Adresse (optionnel)" type="text" />
    <input *ngIf="fullForm" ngControl="cp" placeholder="cp (optionnel)" type="text" />
    <button type="submit">Ajouter</button>
    <span (click)="toggle(false)" *ngIf="fullForm">X</span>
</form>
  `
})
export class ContactformComponent {
  @Input() myFriends;
  fullForm:boolean=false;
  //http://learnangular2.com/forms/
  addContactForm:Object = {};
  constructor(fb: FormBuilder) {
    this.addContactForm = fb.group({
      firstname: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      cp: ["", Validators.required]
    });

  }
  addNewFriend(event) {
    let newFriendRequest = this.addContactForm['value'];
    console.log(this.addContactForm);
    //console.log(this.addContactForm['value']);
    //console.log(this.myFriends);
    if(newFriendRequest.firstname.trim() == '') {
      alert('Vous devez spécifiez au moins un prénom!');
      // On efface le formulaire
    //  document.querySelector('form').reset();
    }
    else {
      // On surcharge l'objet des datas timestamp et myRequest
      newFriendRequest.timestamp = Math.floor(Date.now() / 1000);
      newFriendRequest.myRequest = true;
      newFriendRequest.image = false;

      // On push le nouveau contact dans le Array myFriends
      this.myFriends.push(this.addContactForm['value']);

      // On peut sauvegarder l'objet myFriends dans le localStorage

      // On efface le formulaire
      //  document.querySelector('form').reset();

    event.preventDefault();
  }
    }

  toggle(value) {
    this.fullForm = value;
    console.log(this.fullForm);
  }





}
