'use strict';

import { ActionHelper } from "../helpers/action-helper";

const actionHelper = new ActionHelper();
export class Login{
    
    constructor(){
        this.url = "http://a.testaddressbook.com/sign_in";
        this.email = element(by.id("session_email"));
        this.senha = element(by.id("session_password"));
        this.btnLogar = element(by.css(".btn-primary")); 

    }

    realizarLogin(){
        let login = this;
        
        actionHelper.sendKeys(login.email, "treinamento@malinator.com");
        actionHelper.sendKeys(login.senha, "treinamento");
        login.btnLogar.click();
    }
}