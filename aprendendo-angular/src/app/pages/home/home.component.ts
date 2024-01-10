import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  example = "Texto de exemplo";
  userA = { name: "Alex", email: "alex@email.com", job: "Instrutor de Programação"}
  userB = { name: "Osvaldo", email: "osvaldo@email.com", job: "Estudante"}
}
