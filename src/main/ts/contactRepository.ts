/// <reference path="contact.ts" />

module cdemo {
    export interface ContactRepository {
        getContacts(): Contact[];
    }

    export class SimpleContactRepository implements ContactRepository {
        private contacts: Contact[] = [];

        constructor() {
        }

        getContacts(): Contact[] {
            return this.contacts;
        }
    }
}