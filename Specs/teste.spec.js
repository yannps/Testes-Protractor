'use strict';

import { browser, element, ExpectedConditions } from "protractor";
import { SuperCalculator } from "../page-objects/SuperCalculator.po";

const superCalculator = new SuperCalculator();
const primeiroValor = 10;
const segundoValor = 5;

describe('Testa calculadora', () => {

    it('Acessar o site', () => {
       
        browser.get("https://juliemr.github.io/protractor-demo/");
        
        expect(element(by.css('h3')).getText()).toEqual("Super Calculator");
    });


    it('soma', () => {
       
        superCalculator.actionSomar(primeiroValor,segundoValor);
        expect(superCalculator.resultado.getText()).toEqual(primeiroValor + segundoValor + '');

    });

    it('subtração', () => {
        
        superCalculator.actionSubtrair(primeiroValor,segundoValor);
        expect(superCalculator.resultado.getText()).toEqual(primeiroValor - segundoValor + '');


    });

    it('divisão', () => {

        superCalculator.actionDividir(primeiroValor,segundoValor);
        expect(superCalculator.resultado.getText()).toEqual(primeiroValor / segundoValor + '');

    });

    it('multiplicação', () => {

        superCalculator.actionMultiplicar(primeiroValor,segundoValor);
        expect(superCalculator.resultado.getText()).toEqual(primeiroValor * segundoValor + '');


    });


});