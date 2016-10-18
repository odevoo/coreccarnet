"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ContactformComponent = (function () {
    function ContactformComponent(fb) {
        this.fullForm = false;
        this.addContactForm = {};
        this.addContactForm = fb.group({
            firstname: ["", common_1.Validators.required],
            phone: ["", common_1.Validators.required],
            address: ["", common_1.Validators.required],
            cp: ["", common_1.Validators.required]
        });
    }
    ContactformComponent.prototype.addNewFriend = function (event) {
        var newFriendRequest = this.addContactForm['value'];
        console.log(this.addContactForm);
        if (newFriendRequest.firstname.trim() == '') {
            alert('Vous devez spécifiez au moins un prénom!');
        }
        else {
            newFriendRequest.timestamp = Math.floor(Date.now() / 1000);
            newFriendRequest.myRequest = true;
            newFriendRequest.image = false;
            this.myFriends.push(this.addContactForm['value']);
            event.preventDefault();
        }
    };
    ContactformComponent.prototype.toggle = function (value) {
        this.fullForm = value;
        console.log(this.fullForm);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactformComponent.prototype, "myFriends", void 0);
    ContactformComponent = __decorate([
        core_1.Component({
            selector: 'add-contact-form',
            template: "\n  <form [ngFormModel]=\"addContactForm\" (submit)=\"addNewFriend($event)\">\n    <input (focus)=\"toggle(true)\" ngControl=\"firstname\" placeholder=\"Pr\u00E9nom\" type=\"text\" />\n    <input *ngIf=\"fullForm\" ngControl=\"phone\" placeholder=\"T\u00E9l\u00E9phone (optionnel)\" type=\"text\" />\n    <input *ngIf=\"fullForm\" ngControl=\"address\" placeholder=\"Adresse (optionnel)\" type=\"text\" />\n    <input *ngIf=\"fullForm\" ngControl=\"cp\" placeholder=\"cp (optionnel)\" type=\"text\" />\n    <button type=\"submit\">Ajouter</button>\n    <span (click)=\"toggle(false)\" *ngIf=\"fullForm\">X</span>\n</form>\n  "
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], ContactformComponent);
    return ContactformComponent;
}());
exports.ContactformComponent = ContactformComponent;
