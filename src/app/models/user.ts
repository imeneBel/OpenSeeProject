import {Todo} from './todo';

export interface User {
id : number;
name: string;
username: string;
email: string;
address: Address;
phone: string;
website: string;
company: Company;
todos: Todo[];
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    long: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
