import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { UpcomingProgramsComponent } from './pages/upcoming-programs/upcoming-programs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'upcoming-programs', component: UpcomingProgramsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
