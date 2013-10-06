/// <reference path="contact.ts" />

module cdemo {
    export interface ContactRepository {
        getContacts(): Contact[];
        addContact(contact:Contact);
    }

    export class SimpleContactRepository implements ContactRepository {
        private contacts: Contact[] = [];

        constructor() {
        }

        getContacts(): Contact[] {
            return this.contacts;
        }

        addContact(contact:Contact) {
            this.contacts.push(contact);
        }
    }
}