'use strict';

export class SuperCalculator{
    
    constructor(){
        this.primeiroCampo = element(by.model("first"));
        this.segundoCampo = element(by.model("second"));
        this.btoGo = element(by.id("gobutton"));
        this.resultado = element(by.css("h2.ng-binding"));

        this.operator = element(by.model("operator"));
        this.operacoes = {
            SOM :  element(by.css("select>option[value = 'ADDITION']")),
            SUB : element(by.css("select>option[value = 'SUBTRACTION']")),
            MUL : element(by.css("select>option[value = 'MULTIPLICATION']")),
            DIV : element(by.css("select>option[value = 'DIVISION']"))

        }
    }

    actionSomar(primeiroValor, segundoValor){
        let superCalculator = this;

        superCalculator.primeiroCampo.sendKeys(primeiroValor);
        superCalculator.segundoCampo.sendKeys(segundoValor);
        superCalculator.btoGo.click();

    }

    actionSubtrair(primeiroValor, segundoValor){
        let superCalculator = this;

        superCalculator.primeiroCampo.sendKeys(primeiroValor);
        superCalculator.segundoCampo.sendKeys(segundoValor);
        superCalculator.operacoes.SUB.click();
        superCalculator.btoGo.click();
    }

    actionDividir(primeiroValor, segundoValor){
        let superCalculator = this;

        superCalculator.primeiroCampo.sendKeys(primeiroValor);
        superCalculator.segundoCampo.sendKeys(segundoValor);
        superCalculator.operacoes.DIV.click();
        superCalculator.btoGo.click();
    }

    actionMultiplicar(primeiroValor, segundoValor){
        let superCalculator = this;

        superCalculator.primeiroCampo.sendKeys(primeiroValor);
        superCalculator.segundoCampo.sendKeys(segundoValor);
        superCalculator.operacoes.MUL.click();
        superCalculator.btoGo.click();
    }

}