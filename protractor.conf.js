'use strict';

require('babel-core/register');

const SpecReporter = require('jasmine-spec-reporter');

module.exports.config = {
    allScriptsTimeout: 100000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
        },
        shardTestFiles: true,
        maxInstances: 2
    },

    onPrepare(){
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,

        }))
    },
    params: {
    
    },
    specs: ['Specs/*.spec.js'],
};