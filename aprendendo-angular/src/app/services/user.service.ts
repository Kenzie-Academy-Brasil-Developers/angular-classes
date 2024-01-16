import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {
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
