import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // <-- REQUIRED
import { StorageService } from '../../services/storage.service';
import { ClothingItem } from '../../models/clothing-item';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, CommonModule],           // <-- REQUIRED
  templateUrl: './upload.html',
  styleUrls: ['./upload.css']
})
export class UploadComponent {

  preview: string | null = null;
  type: 'shirt' | 'pant' | 'other' = 'shirt';
  color = '';
  occasion = 'casual';

  constructor(private storage: StorageService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => this.preview = reader.result as string;
    reader.readAsDataURL(file);
  }

  async save() {
    if (!this.preview) return;

    const item: ClothingItem = {
      type: this.type,
      color: this.color || 'unknown',
      occasion: this.occasion,
      imageDataUrl: this.preview
    };

    await this.storage.addItem(item);

    // reset the form
    this.preview = null;
    this.color = '';
    this.type = 'shirt';
    this.occasion = 'casual';

    alert('Item saved!');
  }
}
