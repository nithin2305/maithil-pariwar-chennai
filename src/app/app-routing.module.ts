import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { UpcomingProgramsComponent } from './pages/upcoming-programs/upcoming-programs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { AboutMithilaComponent } from './about-mithila/about-mithila.component';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminContactMessagesComponent } from './pages/admin-contact-messages/admin-contact-messages.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'upcoming-programs', component: UpcomingProgramsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'about-mithila', component: AboutMithilaComponent },
  { path: 'office-bearers', component: OfficeBearersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/contact-messages', component: AdminContactMessagesComponent },
  { path: 'admin/users', component: AdminUsersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
