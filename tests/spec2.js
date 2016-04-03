var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;


//Give the URL to the actual URL where your Angular app is running

browser.get('http://juliemr.github.io/protractor-demo/');

 
expect(browser.getTitle().to.eventually.equal('Super Calculator'));

