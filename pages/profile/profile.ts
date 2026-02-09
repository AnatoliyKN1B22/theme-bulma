import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'] // Якщо створиш css файл
})
export class ProfileComponent {
  // Статичні дані для відображення (бо ми без ID)
  product = {
    title: 'Супер Гаджет Pro',
    subtitle: 'Технології майбутнього',
    price: '$99.00',
    description: 'Це детальний опис товару на сторінці профілю. Тут можна розповісти про характеристики, переваги та показати великі фотографії. Оскільки ми працюємо без ID, цей опис буде однаковим для всіх переходів.',
    features: ['Еко-матеріали', 'Гарантія 2 роки', 'Безкоштовна доставка'],
    image: 'https://picsum.photos/id/1/800/600'
  };
}