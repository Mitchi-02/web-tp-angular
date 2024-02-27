import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FirstServiceService } from './first-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tp5';
  data = [
    {
      id: 1,
      fruit: 'banane',
      img: '../assets/banane.jpg',
    },
    {
      id: 2,
      fruit: 'pomme',
      img: '../assets/banane.jpg',
    },
    {
      id: 3,
      fruit: 'poire',
      img: '../assets/banane.jpg',
    },
  ];

  handleClick = (fruit: string) => {
    alert(fruit);
  };
  constructor(private firstService: FirstServiceService) {}
  ngOnInit() {
    //this.firstService.test();
  }
}
