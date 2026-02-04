import { ComponentFixture, TestBed } from '@angular/core/testing';
// 👇 Тут була помилка. Тепер імпортуємо правильне ім'я класу
import { ListItemsComponent } from './list-item'; 

describe('ListItemsComponent', () => {
  // 👇 Оновлюємо типи змінних
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 👇 Додаємо компонент в imports
      imports: [ListItemsComponent]
    })
    .compileComponents();

    // 👇 Створюємо правильний компонент
    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});