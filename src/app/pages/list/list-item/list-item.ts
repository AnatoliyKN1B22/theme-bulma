import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../../../components/list-item/list-item'; // Шлях до картки

@Component({
  selector: 'app-list-page', 
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list-item.html', 
  styleUrls: ['./list-item.css']
})
export class ListItemsComponent { 

  // Розширений список товарів (12 штук)
  allProducts = [
    {
      title: 'Супер Гаджет',
      subtitle: 'Технології',
      description: 'Флагманський продукт з неймовірними можливостями.',
      price: '$99.00',
      image: 'https://picsum.photos/id/1/800/600'
    },
    {
      title: 'Набір Майстра',
      subtitle: 'Інструменти',
      description: 'Все необхідне для ремонту в одній коробці.',
      price: '$149.00',
      image: 'https://picsum.photos/id/20/800/600'
    },
    {
      title: 'Софт Пак',
      subtitle: 'ПЗ',
      description: 'Ліцензійний ключ для професійної роботи.',
      price: '$49.00',
      image: 'https://picsum.photos/id/3/800/600'
    },
    {
      title: 'Смарт Годинник',
      subtitle: 'Гаджети',
      description: 'Контролюйте свій час та здоров\'я стильно.',
      price: '$199.00',
      image: 'https://picsum.photos/id/4/800/600'
    },
    {
      title: 'Еко Чашка',
      subtitle: 'Посуд',
      description: 'Зберігає тепло і рятує планету від пластику.',
      price: '$25.00',
      image: 'https://picsum.photos/id/42/800/600'
    },
    {
      title: 'Ретро Камера',
      subtitle: 'Фото',
      description: 'Класичний дизайн з сучасним сенсором 4K.',
      price: '$450.00',
      image: 'https://picsum.photos/id/6/800/600'
    },
    {
      title: 'Механічна клавіатура',
      subtitle: 'Периферія',
      description: 'Приємний звук клавіш для справжніх кодерів.',
      price: '$120.00',
      image: 'https://picsum.photos/id/9/800/600'
    },
    {
      title: 'Бездротові навушники',
      subtitle: 'Аудіо',
      description: 'Шумоподавлення та кришталево чистий звук.',
      price: '$89.00',
      image: 'https://picsum.photos/id/5/800/600'
    },
    {
      title: 'Ноутбук Pro',
      subtitle: 'Комп\'ютери',
      description: 'Потужність, якої вистачить на будь-які задачі.',
      price: '$1299.00',
      image: 'https://picsum.photos/id/0/800/600'
    },
    {
      title: 'Офісне крісло',
      subtitle: 'Меблі',
      description: 'Ергономіка для вашої спини під час довгих мітингів.',
      price: '$250.00',
      image: 'https://picsum.photos/id/1060/800/600'
    },
    {
      title: 'VR Окуляри',
      subtitle: 'Розваги',
      description: 'Пориньте у віртуальні світи з головою.',
      price: '$350.00',
      image: 'https://picsum.photos/id/26/800/600'
    },
    {
      title: 'Розумна Лампа',
      subtitle: 'Дім',
      description: 'Керуйте світлом зі смартфона, 16 млн кольорів.',
      price: '$45.00',
      image: 'https://picsum.photos/id/30/800/600'
    }
  ];
}