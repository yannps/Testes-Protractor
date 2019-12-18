'use strict';

import { ActionHelper } from "../helpers/action-helper";

const actionHelper = new ActionHelper();
export class NewAdress{

    constructor(){
        this.url = "http://a.testaddressbook.com/addresses/new";
        this.firstName = element(by.id("address_first_name"));
        this.lastName = element(by.id("address_last_name"));
        this.adress = element(by.id("address_street_address"));
        this.city = element(by.id("address_city"));
        this.zipCode = element(by.id("address_zip_code"));
        this.anexoFile = element(by.id("adress_picture"));
    }

    preencheForm(){
        let newAdress = this;

        actionHelper.sendKeys(newAdress.firstName, "Flamengo");
        actionHelper.sendKeys(newAdress.lastName, "Campeão Mundial");
        actionHelper.sendKeys(newAdress.adress, "Qatar");
        actionHelper.sendKeys(newAdress.city, "Doha");
        actionHelper.sendKeys(newAdress.zipCode, "138473184");
        actionHelper.anexar(newAdress.anexoFile);
        newAdress.submit();

    }
}