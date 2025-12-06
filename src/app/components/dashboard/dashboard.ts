import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { ClothingItem } from '../../models/clothing-item';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  total = 0;
  shirts = 0;
  pants = 0;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.itemsObservable.subscribe((items: ClothingItem[]) => {
      this.total = items.length;
      this.shirts = items.filter(i => i.type === 'shirt').length;
      this.pants = items.filter(i => i.type === 'pant').length;
    });
  }
}
