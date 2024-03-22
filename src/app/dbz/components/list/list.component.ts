import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(index?: string): void {
    if (!index) return;
    this.onDelete.emit(index);
  }
}
