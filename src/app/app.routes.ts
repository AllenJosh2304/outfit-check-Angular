import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { UploadComponent } from './components/upload/upload';
import { GalleryComponent } from './components/gallery/gallery';
import { DashboardComponent } from './components/dashboard/dashboard';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'dashboard', component: DashboardComponent }
];

