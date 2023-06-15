import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class PostListComponent {
  posts = [
    {
      title: 'Meu primeiro post',
      content: 'Este é o conteúdo do meu primeiro post...',
      date: '2023-06-01',
      author: 'João',
      image: 'https://images5.alphacoders.com/130/1302520.jpg'
    },
    {
      title: 'Outro post interessante',
      content: 'Este é o conteúdo de outro post...',
      date: '2023-06-05',
      author: 'Maria',
      image: 'https://w0.peakpx.com/wallpaper/232/507/HD-wallpaper-battlefield-game-ea-games-battlefield-4-games-pc-games-xbox-games-ps4-games-pc-games.jpg'
    },
    {
      title: 'Meu primeiro post',
      content: 'Este é o conteúdo do meu primeiro post...',
      date: '2023-06-01',
      author: 'João',
      image: 'https://wallpaperaccess.com/full/9135.jpg'
    },
    {
      title: 'Meu primeiro post',
      content: 'Este é o conteúdo do meu primeiro post...',
      date: '2023-06-01',
      author: 'João',
      image: 'https://wallpaperaccess.com/full/9135.jpg'
    },
  ];
}
