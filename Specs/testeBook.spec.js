'use strict';

import { ScenarioHelper } from "../helpers/scenario-helper";
import { Welcome } from "../page-objects/Welcome.po";
import { browser, element, ExpectedConditions } from "protractor";
import { ExpectedHelper } from "../helpers/expected-helper";
import { Login } from "../page-objects/Login.po";
import { ActionHelper } from "../helpers/action-helper";

const scenarioHelper = new ScenarioHelper();
const welcomePO = new Welcome();
const expectedHelper = new ExpectedHelper();
const loginPO = new Login();


beforeAll(() =>{
    browser.waitForAngularEnabled(false);

});
 describe('Cadastra Endereço', () => {

    it('Acessar o site', () => {
        let elementExpected = element(by.css('h1'));
        let valueExpected = "Welcome to Address Book";
        scenarioHelper.visitUrl(welcomePO.url);
        
        expect(expectedHelper.waitForElementContains(elementExpected, valueExpected));
    });

    it('Acessar Login', () => {
        let elementExpected = element(by.css('h2'));
        let valueExpected = "Sign in";

        welcomePO.acessarLogin();

        expect(expectedHelper.waitForElementContains(elementExpected, valueExpected));

    });


    it('Realizar Login', () => {
        let elementExpected = element(by.css('.navbar-text'));
        let valueExpected = "treinamento@malinator.com";

        loginPO.realizarLogin();

        expect(expectedHelper.waitForElementContains(elementExpected, valueExpected));


    });

    
    it('Acessar tela de listagem de endereços', () => {
        let elementExpected = element(by.css('h2'));
        let valueExpected = "Addresses";

        welcomePO.acessarAdresses();
        expect(expectedHelper.waitForElementContains(elementExpected, valueExpected));
    });


    it('Acessar tela de cadastro de endereço', () => {
        

    });


    it('Fazer cadastro de endereço', () => {
        

    });

});