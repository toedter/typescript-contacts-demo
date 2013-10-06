/// <reference path="../../typescript-defs/jasmine.d.ts" />
/// <reference path="../../main/ts/contactRepository.ts" />

describe('Contact Repository', () => {
    it('should be initialized with empty contact list', () => {
        var contactRepository:cdemo.ContactRepository = new cdemo.SimpleContactRepository();
        expect(contactRepository.getContacts().length).toBe(0);
    });
});
