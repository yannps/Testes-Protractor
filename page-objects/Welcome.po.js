'use strict'

import { element } from "protractor";

export class Welcome{

    constructor(){
        this.url = "http://a.testaddressbook.com/";
        this.signIn = element(by.id("sign-in"));
        this.addresses = element(by.css("a[data-test=addresses]"));
        this.titulo = element(by.css("h1"));

    }

    acessarLogin(){
        let welcome = this;

        welcome.signIn.click();
    }

    acessarAdresses(){
        let welcome = this;

        welcome.addresses.click();
    }
}