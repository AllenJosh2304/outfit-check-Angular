import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { ClothingItem } from '../../models/clothing-item';
import { FiltersComponent } from '../filters/filters';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FiltersComponent],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {

  items: ClothingItem[] = [];        // All items from database
  filteredItems: ClothingItem[] = []; // Items after filtering

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.itemsObservable.subscribe(items => {
      this.items = items;
      this.filteredItems = items; // initial view
    });
  }

  applyFilters(filters: any) {
    this.filteredItems = this.items.filter(item => {
      return (
        (filters.type === '' || item.type === filters.type) &&
        (filters.color === '' || item.color.toLowerCase().includes(filters.color.toLowerCase())) &&
        (filters.occasion === '' || item.occasion === filters.occasion)
      );
    });
  }

  delete(id?: number) {
    if (!id) return;
    this.storage.deleteItem(id);
  }
}
