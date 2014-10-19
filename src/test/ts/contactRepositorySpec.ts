/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contactRepository.ts" />
/// <reference path="../../main/ts/simpleContact.ts" />
/// <reference path="../../main/ts/simpleContactRepository.ts" />

describe('Contact Repository', () => {
    var contactRepository:cdemo.ContactRepository;

    beforeEach(function () {
        contactRepository = new cdemo.SimpleContactRepository();
    });

    it('should be initialized with empty contact list', () => {
        expect(contactRepository.getContacts().length).toBe(0);
    });

    it('should return an added contact in the contacts list', () => {
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        contactRepository.addContact(contact);
        expect(contactRepository.getContacts()).toContain(contact);
    });

    it('should be empty after all contacts have been removed', () => {
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        contactRepository.addContact(contact);
        contactRepository.clear();
        expect(contactRepository.getContacts().length).toBe(0);
    });
});
