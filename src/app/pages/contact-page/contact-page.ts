import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {

  listaContactos:Contact[] = [
    {
      id: "1",
      firstName: 'alvaro',
      lastName: "dainesi",
      number: "3476123123",
      image: "",
      company: "",
      address: "",
      email: 'adainesi@austral.edu.ar',
      isFavourite: true,
    },
    {
      id: "2",
      firstName: 'felipe',
      lastName: "nina",
      number: "3471234234",
      image: "",
      company: "",
      address: "",
      email: 'fnina@austral.edu.ar'
    },
  ]

}