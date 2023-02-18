import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'add-contact-popup',
  templateUrl: './add-contact-popup.component.html',
  styleUrls: ['./add-contact-popup.component.scss'],
})
export class AddContactPopupComponent implements OnInit {
  constructor(private router: Router, private contactService: ContactService) {}
  contact!: Contact;

  ngOnInit(): void {
    this.contact = {
      name: '',
      email: '',
      phone: '',
    } as Contact;
  }

  onSaveContact = async () => {
    await lastValueFrom(this.contactService.saveContact(this.contact));
    this.router.navigateByUrl('/contacts');
  };
}
