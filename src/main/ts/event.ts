/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="contact.ts" />

module cdemo {
    export enum EventType { SUBSCRIBE, UNSUBSCRIBE, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, UNKNOWN }

    export class Event {

        constructor(private type:EventType, private sourceId:string, private contact:cdemo.Contact) {
        }

        getType():EventType {
            return this.type;
        }

        getSourceId():string {
            return this.sourceId;
        }

        getData():cdemo.Contact {
            return this.contact;
        }

        static fromJson(json:string) {
            var jsonObject = JSON.parse(json);
            var type:EventType = EventType[String(jsonObject.type)];
            if (!type) {
                type = EventType.UNKNOWN;
            }

            return new Event(type, jsonObject.sourceId, jsonObject.data);
        }
    }
}
