/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="contact.ts" />

module cdemo {
    export interface ContactRepository {
        getContacts(): Contact[];
        addContact(contact:Contact);
        clear();
    }
}