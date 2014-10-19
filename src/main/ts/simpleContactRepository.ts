/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="contact.ts" />
/// <reference path="contactRepository.ts" />

module cdemo {
    export class SimpleContactRepository implements ContactRepository {
        private contacts:Contact[] = [];

        constructor() {
        }

        getContacts():Contact[] {
            return this.contacts;
        }

        addContact(contact:Contact) {
            this.contacts.push(contact);
        }

        clear() {
            this.contacts = [];
        }
    }
}