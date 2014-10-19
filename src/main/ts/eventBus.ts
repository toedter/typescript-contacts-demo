/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

///<reference path="event.ts" />

module cdemo {
    export class EventBus<T> {
        private subscribers = [];

        subscribe(callback:(event:T) => void) {
            if (this.subscribers.indexOf(callback) === -1) {
                this.subscribers.push(callback);
            }
        }

        publish(event:T) {
            this.subscribers.forEach(function (callback:(event:T) => void) {
                callback(event);
            })
        }
    }
}

