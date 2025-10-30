import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: 'cervos-programadores/cervos-programadores.html',
  styleUrl: 'cervos-programadores/cervos-programadores.css',
})
export class App {
  protected readonly title = signal('deerParadise');
}
