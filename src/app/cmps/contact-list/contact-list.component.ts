import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  @Input() contacts!: Contact[];
  @Output() contactSelectedEvent = new EventEmitter<string>();
  @Output() removeContactEvent = new EventEmitter<string>();
  @Output() editContactEvent = new EventEmitter<string>();

  ngOnInit(): void {}
  onSelectedContact(contactId: string): void {
    this.contactSelectedEvent.emit(contactId);
  }
  trackByFn(_: number, contact: any) {
    return contact._id;
  }
}
