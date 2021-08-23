import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText = '';
  //to be changed!!!!
  game = [
    {
      name: 'this.name',
      price: 'this.price',
      description: 'this.description',
    }
  ]
  search = '';
}
