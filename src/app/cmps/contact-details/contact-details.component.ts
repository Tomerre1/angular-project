import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  editContactMode!: Boolean;
  editContact!: Contact;
  contact!: Contact;
  paramsSubscription!: Subscription;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.data.subscribe((data) => {
      this.editContactMode = !!data['editMode'];
      const contact: Contact = data['contact'];
      if (!this.editContactMode) this.contact = contact;
      else this.editContact = contact;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onBack = (): void => {
    this.router.navigateByUrl('/contacts');
  };

  onEdit = (): void => {
    this.router.navigate(['/contacts/edit', this.contact._id]);
  };

  onRemove = (): void => {
    const contactDeletId = (this.editContact?._id ||
      this.contact._id) as string;
    this.contactService.deleteContact(contactDeletId);
    this.onBack();
  };

  onSubmit = (): void => {
    this.contactService.saveContact(this.editContact);
    this.router.navigate(['/contacts', this.editContact._id]);
  };
}
