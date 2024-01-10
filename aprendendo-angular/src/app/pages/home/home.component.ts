import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  example = 'Texto de exemplo';
  userList = [
    { name: 'Alex', email: 'alex@email.com', job: 'Instrutor de Programação' },
    { name: 'Osvaldo', email: 'osvaldo@email.com', job: 'Estudante' },
    {
      name: 'Maria',
      email: 'maria@email.com',
      job: 'Desenvolvedora Front-end',
    },
  ];
}
