import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filters.html',
  styleUrls: ['./filters.css']
})
export class FiltersComponent {
  // bound to the template via ngModel
  type = '';
  color = '';
  occasion = '';

  @Output() filtersChanged = new EventEmitter<{type: string, color: string, occasion: string}>();

  emitFilters() {
    this.filtersChanged.emit({
      type: this.type,
      color: this.color,
      occasion: this.occasion
    });
  }
}
