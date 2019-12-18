'use strict';

export class NewAdress{

    constructor(){
        this.url = "http://a.testaddressbook.com/addresses/new";
        this.firstName = element(by.id("address_first_name"));
        this.lastName = element(by.id("address_last_name"));
        this.adressOne = element(by.id("address_street_address"));
        this.adressTwo = element(by.id("address_secondary_address"));
        this.city = element(by.id("address_city"));
    }
}