export class Person {
    constructor(
        public title: string,
        public name: string,
        public email: string,
        public phoneNumber: number,
        public address: string,
        public officeNumber?:number
    ){}
}
