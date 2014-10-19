/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contact.ts" />
/// <reference path="../../main/ts/simpleContact.ts" />
/// <reference path="../../main/ts/event.ts" />
/// <reference path="../../main/ts/eventBus.ts" />

describe("EventBus", () => {
    var eventBus:cdemo.EventBus<cdemo.Event>;

    beforeEach(() => {
        eventBus = new cdemo.EventBus();
    });

    it("should be initialized", () => {
        expect(eventBus).toBeDefined();
    });

    it("should invoke subscriber after publish", () => {
        var invoked:boolean = false;
        eventBus.subscribe(function (event:cdemo.Event) {
            invoked = true;
        });
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        eventBus.publish(new cdemo.Event(cdemo.EventType.SUBSCRIBE, 'Id-1', contact));
        expect(invoked).toBe(true);
    });
});