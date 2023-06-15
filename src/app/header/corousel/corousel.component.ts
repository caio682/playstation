import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit{

  
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://wallpaperaccess.com/full/1841989.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://wallpaperaccess.com/full/4334829.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: 'https://wallpapercave.com/wp/wp4850021.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

}


