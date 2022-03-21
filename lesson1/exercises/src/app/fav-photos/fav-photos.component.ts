import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://i.pinimg.com/564x/e3/76/84/e376843a58dd32f762fcb1ef0b1702e1.jpg';
  image2 = 'https://i.pinimg.com/564x/8c/1e/d9/8c1ed9c7eaaa76a530073caa4a40c268.jpg';
  image3 = 'https://i.pinimg.com/564x/85/8b/9b/858b9b47df40a4f1c8a8b25be15367e9.jpg';

  constructor() { }

  ngOnInit() {
  }

}