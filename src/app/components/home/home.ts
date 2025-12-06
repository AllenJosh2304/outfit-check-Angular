import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { ClothingItem } from '../../models/clothing-item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  latestItems: ClothingItem[] = [];

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.storage.itemsObservable.subscribe(items => {
      // take the latest 6 items (newest first)
      this.latestItems = [...items]
        .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
        .slice(0, 6);
    });
  }
}
