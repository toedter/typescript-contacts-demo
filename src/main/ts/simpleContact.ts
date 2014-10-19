/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="contact.ts" />

module cdemo {
    export class SimpleContact implements Contact {
        constructor(private firstName:string, private lastName:string, private email:string) {
        }

        getFirstName():string {
            return this.firstName;
        }

        getLastName():string {
            return this.lastName;
        }

        getEMail():string {
            return this.email;
        }
    }
}