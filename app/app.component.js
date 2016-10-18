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
var search_pipe_1 = require('./search.pipe');
var orderby_pipe_1 = require("./orderby.pipe");
var contactform_component_1 = require('./contactform.component');
var AppComponent = (function () {
    function AppComponent() {
        this.firstname = "Fred";
        this.friends = [
            { isActive: false, firstname: 'Marie', phone: '0688546622', address: '22 rue de l\'Elysée', cp: '75015', myRequest: false, timestamp: 1476264134, image: "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
            { isActive: false, firstname: 'Noah', phone: '0752824525', address: '2 allée des roses', cp: '93200', myRequest: false, timestamp: 1460256014, image: "https://randomuser.me/api/portraits/thumb/men/61.jpg" },
            { isActive: false, firstname: 'Bill', phone: '0621554738', address: '77 Avenue du Général de Gaulle', cp: '75008', myRequest: true, timestamp: 1469022000, image: "https://randomuser.me/api/portraits/thumb/men/69.jpg" },
            { isActive: false, firstname: 'Steve', phone: '0657825424', address: '1 rue Charles Tillon', cp: '93300', myRequest: false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/46.jpg" },
            { isActive: false, firstname: 'Claire', phone: '0622353542', address: '47 rue du Maine', cp: '75014', myRequest: false, timestamp: 1473082800, image: false },
            { isActive: false, firstname: 'Nathalie', phone: '0784559975', address: '155 Avenue de Flandre', cp: '75019', myRequest: false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/women/18.jpg" },
            { isActive: false, firstname: 'Mark', phone: '0756458211', address: '10 Bld de Montmorency', cp: '75016', myRequest: false, timestamp: 1473082800, image: "https://randomuser.me/api/portraits/thumb/men/86.jpg" }
        ];
        this.newFriend = {};
    }
    AppComponent.prototype.totalResults = function () {
        var sum = 0;
        for (var friend in this.friends) {
            sum++;
        }
        return sum;
    };
    AppComponent.prototype.deleteFriendRequest = function (friend) {
        if (confirm('Voulez-vous vraiment supprimer ' + friend.firstname + ' : index ' + this.friends.indexOf(friend))) {
            var index = this.friends.indexOf(friend);
            if (index > -1) {
                this.friends.splice(index, 1);
            }
        }
        this.hideDetails();
    };
    AppComponent.prototype.showDetails = function (friend) {
        console.log(friend);
        friend.isActive = true;
        this.details = friend;
    };
    AppComponent.prototype.hideDetails = function () {
        this.details = false;
    };
    AppComponent.prototype.addNewFriend = function (newFriend) {
        newFriend.isActive = false;
        newFriend.myRequest = true;
        newFriend.timestamp = Math.floor(Date.now() / 1000);
        if ("firstname" in this.newFriend) {
            console.log(this.newFriend);
            this.friends.push(newFriend);
        }
        else {
            alert('Vous devez spécifier un nom !');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            pipes: [search_pipe_1.SearchPipe, orderby_pipe_1.OrderbyPipe],
            directives: [contactform_component_1.ContactformComponent],
            styles: ["\n    .myReq {color: #B52E31}\n    h1 {background: #e5e5e5;}\n    ul {margin-left:20px}\n  "],
            templateUrl: '.app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
