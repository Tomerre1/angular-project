import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  filterBy$!: Subscription;
  filterBy!: ContactFilter;

  ngOnInit(): void {
    this.contactService.contactFilter$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }

  onSetFilter(value: string): void {
    this.contactService.setContactFilter({ term: value });
  }
}
