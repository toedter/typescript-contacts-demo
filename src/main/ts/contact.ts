/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

module cdemo {
    export interface Contact {
        getFirstName(): string;
        getLastName(): string;
        getEMail(): string;
    }
}