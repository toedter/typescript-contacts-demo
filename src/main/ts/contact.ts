module cdemo {
    export interface Contact {
        getFirstName():string;
        getLastName(): string;
        getEMail(): string;
    }

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