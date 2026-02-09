import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, ListItemComponent, RouterModule], // Імпортуємо малий, щоб юзати в HTML
  templateUrl: './list-items-section.html',
  styleUrls: ['./list-items-section.css']
})
export class ListItemsComponent {
  // Фейкові дані для візуалізації
  products = [
    {
      title: 'Супер Гаджет',
      subtitle: 'Технології',
      description: 'Дуже класний опис першого товару, який займає трохи місця.',
      price: '$99.00',
      image: 'https://picsum.photos/id/1/800/600'
    },
    {
      title: 'Крутий Набір',
      subtitle: 'Інструменти',
      description: 'Опис другого товару. Він коротший.',
      price: '$149.00',
      image: 'https://picsum.photos/id/20/800/600'
    },
    {
      title: 'Дизайн Пак',
      subtitle: 'Софт',
      description: 'Третій товар з довгим описом, щоб перевірити, як картка розтягується.',
      price: '$49.00',
      image: 'https://picsum.photos/id/3/800/600'
    }
  ];
}