'use strict';

import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class ExpectedHelper{

    waitForElementContains(element, value){
        
       return browser.wait(browser.ExpectedConditions.textToBePresentInElement(element,value), 4000)
        .catch((e) => Promise.reject(`Erro ao tentar verificar se o elemento ${element.locator()} contém ${value} ${e}`));
    }

}