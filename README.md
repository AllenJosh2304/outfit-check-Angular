# 👗 Outfit Check — Wardrobe Organizer App  

A modern and stylish wardrobe organizer built with **Angular**.  
Users can upload outfit photos, filter them by multiple categories, and view everything in a clean, attractive gallery.  
All data is stored locally using **IndexedDB (Dexie.js)** — no backend required.

## 🚀 Features

### ✨ Core Features  
- Upload outfits with:
  - Image preview  
  - Type (Shirt, Pant, Other)  
  - Color  
  - Occasion  
- Stylish, attractive upload form  
- Gallery with modern card-based UI  
- Powerful filtering system:
  - By type  
  - By color  
  - By occasion  
- Dashboard with counts:
  - Total outfits  
  - Shirts  
  - Pants  

### 🎨 UI / UX Features  
- Beautiful homepage with latest uploads  
- Smooth hover animations  
- Clean modern gradients  
- Fully responsive layout  
- Navigation bar with routing  
- All pages follow a consistent stylish theme  

### 🗄 Storage  
- Saves all outfit data in **IndexedDB**  
- Works offline  
- Fast, secure local storage  
- No server needed  

---

## 🏗 Tech Stack

| Area | Technology |
|------|------------|
| Frontend | Angular 17 (Standalone Components) |
| Programming Language | TypeScript |
| Styling | Custom CSS |
| Local Database | IndexedDB via Dexie.js |
| Build Tool | Angular CLI |

---

## 📂 Project Structure

src/app/
│
├── components/
│ ├── home/
│ ├── upload/
│ ├── gallery/
│ ├── dashboard/
│ ├── filters/
│
├── services/
│ ├── image-db.service.ts
│ ├── storage.service.ts
│
├── models/
│ ├── clothing-item.ts
│
├── app.routes.ts
└── app.ts

## 🛠 Installation & Running the App

### 1️⃣ Clone the repository  

git clone https://github.com/AllenJosh2304/outfit-check-Angular.git
2️⃣ Install dependencies
npm install
3️⃣ Run the app

ng serve --open
The app will open automatically at:
👉 http://localhost:4200

👨‍💻 Developer
Allen Joshua
GitHub: https://github.com/AllenJosh2304

🎉 Thank you for checking out Outfit Check!
