import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact, ContactFilter } from '../../models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
  constructor(private contactService: ContactService) {}
  contacts!: Contact[];
  contacts$!: Observable<Contact[]>;
  selectedContactId!: Contact | null;
  editContactMode: Boolean = false;
  // contactFilterBy$!: Observable<ContactFilter>;

  ngOnInit(): void {
    // this.contactFilterBy$ = this.contactService.contactFilter$;
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }

  onRemoveContact(contactId: string): void {
    this.contactService.deleteContact(contactId);
    this.selectedContactId = null;
  }

  onEditContact(contactId: string): void {
    this.contactService.getContactById(contactId).subscribe((contact) => {
      this.selectedContactId = contact;
      this.editContactMode = true;
    });
  }
  ngOnDestroy(): void {}
}
