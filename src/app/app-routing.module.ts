import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactPopupComponent } from './add-contact-popup/add-contact-popup.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ContactGuard } from './guards/contact.guard';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactResolver } from './resolvers/contact.resolver';

const routes: Routes = [
  {
    path: 'contacts/edit/:id',
    component: ContactDetailsComponent,
    data: { editMode: true },
    resolve: { contact: ContactResolver },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [{ path: 'add', component: AddContactPopupComponent }],
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
    canActivate: [ContactGuard],
  },
  { path: 'stats', component: ChartComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
