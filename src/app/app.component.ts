import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 standalone: true, // Adicione esta linha
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 // ...
}