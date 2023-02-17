import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @Output() removeContactEvent = new EventEmitter<string>();
  editContactMode!: Boolean;
  editContact!: Contact;
  contact!: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { editMode?: boolean }) => {
      this.editContactMode = data?.editMode || false;
    });

    this.route.params.subscribe(async (params) => {
      const contactById = (await lastValueFrom(
        this.contactService.getContactById(params['id'])
      )) as unknown as Contact;

      if (this.editContactMode) {
        this.editContact = contactById;
      } else {
        this.contact = contactById;
      }
    });
  }

  onBack = (): void => {
    this.router.navigateByUrl('/contacts');
  };

  onEdit = (): void => {
    this.router.navigate(['/contacts/edit', this.contact._id]);
  };

  onSubmit = (): void => {
    this.contactService.saveContact(this.editContact);
    this.onBack();
  };
}
