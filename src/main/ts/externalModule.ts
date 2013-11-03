/**
 * Created by toedter_k on 03.11.13.
 */

export module extModule {
    export class ToBeExported {
        constructor(private test:string) {

        }

        getTest(): string {
            return this.test;
        }
    }
}
