import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { UpcomingProgramsComponent } from './pages/upcoming-programs/upcoming-programs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMithilaComponent } from './about-mithila/about-mithila.component';
import { FormsModule } from '@angular/forms';
import { OfficeBearersComponent } from './office-bearers/office-bearers.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminContactMessagesComponent } from './pages/admin-contact-messages/admin-contact-messages.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    UpcomingProgramsComponent,
    ContactUsComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PhotoGalleryComponent,
    AboutMithilaComponent,
    OfficeBearersComponent,
    AdminContactMessagesComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
