import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ClothingItem } from '../models/clothing-item';

class OutfitDB extends Dexie {
  items!: Dexie.Table<ClothingItem, number>;

  constructor() {
    super('OutfitDB');  // Database name
    this.version(1).stores({
      items: '++id, type, color, occasion, createdAt'
    });
  }
}

const db = new OutfitDB();

@Injectable({
  providedIn: 'root'
})
export class ImageDbService {

  async addItem(item: ClothingItem) {
    item.createdAt = Date.now();
    return await db.items.add(item);
  }

  async getAll() {
    return await db.items.toArray();
  }

  async deleteItem(id: number) {
    return await db.items.delete(id);
  }

  async updateItem(id: number, updates: Partial<ClothingItem>) {
    return await db.items.update(id, updates);
  }

  async clearAll() {
    return await db.items.clear();
  }
}
