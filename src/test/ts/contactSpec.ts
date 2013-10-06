/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contact.ts" />

describe('Contact', () => {
    it('should be initialized', () => {
        var contact:cdemo.Contact = new cdemo.SimpleContact('Kai', 'Toedter', 'kai@toedter.com');
        expect(contact.getFirstName()).toBe('Kai');
        expect(contact.getLastName()).toBe('Toedter');
        expect(contact.getEMail()).toBe('kai@toedter.com');
    });
});
