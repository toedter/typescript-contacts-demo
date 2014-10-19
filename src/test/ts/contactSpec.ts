/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contact.ts" />
/// <reference path="../../main/ts/simpleContact.ts" />

describe('Contact', () => {
    it('should be initialized', () => {
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        expect(contact.getFirstName()).toBe('Kai');
        expect(contact.getLastName()).toBe('Toedter');
        expect(contact.getEMail()).toBe('kai@toedter.com');
    });
});
