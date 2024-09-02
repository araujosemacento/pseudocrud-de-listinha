import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatList } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatList,
    MatDivider,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pseudocrud de listinha';
  value = '';
  saida: any = ['oi', 'aqui', 'vai', 'ser', 'uma', 'listinha'];

  removeItem(item: string): void {
    const index = this.saida.indexOf(item);
    if (index > -1) {
      this.saida.splice(index, 1);
    }
  }

  addItem(): void {
    if (!this.value) {
      return;
    }
    this.saida.push(this.value);
    this.value = '';
  }
}
