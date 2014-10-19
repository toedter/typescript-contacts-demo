/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contact.ts" />
/// <reference path="../../main/ts/simpleContact.ts" />
/// <reference path="../../main/ts/event.ts" />

describe('Event', () => {
    it('should be initialized', () => {
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        var event:cdemo.Event = new cdemo.Event(cdemo.EventType.SUBSCRIBE, 'id-1', contact);
        expect(event.getSourceId()).toBe('id-1');
        expect(event.getType()).toBe(cdemo.EventType.SUBSCRIBE);
        expect(event.getData()).toBe(contact);
    });

    it('should be created from valid json', () => {
        var json = {"type": "UNSUBSCRIBE", "sourceId": "id-2", "contact": {"firstName": "Kai", "lastName": "Toedter", "email": "kai@toedter.com"}};
        var event:cdemo.Event = cdemo.Event.fromJson(JSON.stringify(json));
        expect(event.getSourceId()).toBe('id-2');
        expect(event.getType()).toBe(cdemo.EventType.UNSUBSCRIBE);
    });

    it('should create UNKNOWN event type from valid json event type', () => {
        var json = {"type": "xxx", "sourceId": "id-2", "contact": {"firstName": "Kai", "lastName": "Toedter", "email": "kai@toedter.com"}};
        var event:cdemo.Event = cdemo.Event.fromJson(JSON.stringify(json));
        expect(event.getSourceId()).toBe('id-2');
        expect(event.getType()).toBe(cdemo.EventType.UNKNOWN);
    });
});
