import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'contacts/edit/:id',
    component: ContactDetailsComponent,
    data: { editMode: true },
  },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'stats', component: ChartComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
