import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomeComponent } from './pages/home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './pages/chart/chart.component';
import { HeaderComponent } from './cmps/header/header.component';
import { AddContactPopupComponent } from './add-contact-popup/add-contact-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactsComponent,
    ContactPreviewComponent,
    AppPageComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    HomeComponent,
    ChartComponent,
    HeaderComponent,
    AddContactPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
