export interface ClothingItem {
  id?: number;
  type: 'shirt' | 'pant' | 'other';
  color: string;
  occasion: string;
  imageDataUrl: string;  // image stored as base64
  createdAt?: number;
}
