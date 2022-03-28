import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled:boolean = true;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLanding() {
   window.alert ("The shuttle is landing. Landing gear engaged.");
  this.color = 'green';
  this.message="The shuttle has landed.";
  this.height = 0;
  this.takeOffEnabled = true;
 }

 handleAbort() {
   let result = window.confirm("Do you really want to abort mission?");
   if(result) {
     this.message="Misson aborted.";
     this.color = "red";
     this.height = 0;
     this.takeOffEnabled = true;
   };
 }

 moveRocket(rocketImg, direction) {
   if (direction === "right") {
    let movement = parseInt(rocketImg.style.left) + 10 + 'px';
    rocketImg.style.left = movement;
    this.width += 1000;
   }
   if(direction === "left") {
    let movement = parseInt(rocketImg.style.left) - 10 + 'px';
    rocketImg.style.left = movement;
    this.width -= 1000;
   }
   if(direction === "down") {
    let movement = parseInt(rocketImg.style.bottom) - 10 + 'px';
    rocketImg.style.bottom = movement;
    this.height -= 1000;
   }
   if(direction === "up") {
    let movement = parseInt(rocketImg.style.bottom) + 10 + 'px';
    rocketImg.style.bottom = movement;
    this.height += 1000;
   }
 ;}

  gutterCheck(width, height) {
    if (width > 470 + "px" || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

 }
