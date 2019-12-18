'use-strict';

import { browser } from "protractor";


export class ScenarioHelper{

    visitUrl(url){
        return browser.get(url)
        .catch((e) => Promise.reject(`Erro ao visitar a url ${url} ${e}`))
    }

    
}
