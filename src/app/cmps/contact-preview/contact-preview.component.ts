import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() removeContactEvent = new EventEmitter<string>();
  @Output() editContactEvent = new EventEmitter<string>();

  constructor(private router: Router) {}
  onSelectContact() {
    this.router.navigate(['/contacts/', this.contact._id]);
  }
  onRemoveContact() {
    this.removeContactEvent.emit(this.contact._id);
  }
  onEditContact() {
    this.router.navigate(['/contacts/', 'edit', this.contact._id]);
  }
  ngOnInit(): void {}
}
