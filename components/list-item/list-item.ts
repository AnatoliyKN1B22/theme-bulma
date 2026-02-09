import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-item.html',
  styleUrls: ['./list-item.css']
})
export class ListItemComponent {
  @Input() item: any;
  @Input() index: number = 0;

  rotateX = 0;
  rotateY = 0;

  // Цей рядок формує стиль трансформації прямо в код
  transformStyle = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  
  // Додаємо клас для плавності тільки коли мишка йде
  transitionClass = '';

  onMouseMove(event: MouseEvent) {
    // 1. ДІАГНОСТИКА: Відкрий F12 -> Console. Якщо бачиш цифри, значить мишка працює.
    // console.log('Mouse moving!'); 

    this.transitionClass = ''; // Вимикаємо плавність під час руху (щоб не було затримок)

    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Рахуємо кути (множник 15 - це сила нахилу)
    const rotateYRaw = ((x - centerX) / centerX) * 15;
    const rotateXRaw = -((y - centerY) / centerY) * 15;

    this.rotateX = rotateXRaw;
    this.rotateY = rotateYRaw;

    // Оновлюємо стиль
    this.transformStyle = `perspective(1000px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`;
  }

  onMouseLeave() {
    this.transitionClass = 'is-resetting'; // Вмикаємо плавність для повернення
    this.rotateX = 0;
    this.rotateY = 0;
    this.transformStyle = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }
}