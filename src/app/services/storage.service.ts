import { Injectable } from '@angular/core';
import { ImageDbService } from './image-db.service';
import { ClothingItem } from '../models/clothing-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private items$ = new BehaviorSubject<ClothingItem[]>([]);
  itemsObservable = this.items$.asObservable();

  constructor(private db: ImageDbService) {
    this.loadItems();
  }

  async loadItems() {
    const allItems = await this.db.getAll();
    this.items$.next(allItems);
  }

  async addItem(item: ClothingItem) {
    await this.db.addItem(item);
    await this.loadItems();
  }

  async deleteItem(id: number) {
    await this.db.deleteItem(id);
    await this.loadItems();
  }

  async updateItem(id: number, updates: Partial<ClothingItem>) {
    await this.db.updateItem(id, updates);
    await this.loadItems();
  }

  getSnapshot() {
    return this.items$.value;
  }
}
