'use strict';

export class ActionHelper{

    sendKeys(element, text){
        return element.clear().then(()=> element.sendKeys(text))
        .catch((e) => Promise.reject(`Erro ao tentar digitar ${text} no elemento ${element.locator()} ${e}`));

    }    

    anexar(element){
        return element.sendKeys(`${__dirname}/PDF_TESTE`);
    }
}