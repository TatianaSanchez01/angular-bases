import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];
  public removedHero: string | undefined = '';
  
  removeLastHero(): void {
    this.removedHero = this.heroNames.pop();
  }
}
