const config = require('./protractor-ci.conf.js').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox']
    }
};

exports.config = config;