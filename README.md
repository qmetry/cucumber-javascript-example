
# cucumber-javascript-example

This is sample cucumber project using Node.js. It shows how to upload test result file on JIRA instance using [QMetry for JIRA - Test Management](https://marketplace.atlassian.com/plugins/com.infostretch.QmetryTestManager/cloud/overview).  


## Prerequesites

* [Node.js](http://nodejs.org)
* [NPM](http://npmjs.org)
* [cucumber-js](https://github.com/cucumber/cucumber-js)

## How to use

* Install cucumber-js globally with:
``` shell
$ npm install -g cucumber
```
* Clone this repository
* Then install all required dependencies with `npm install`
* Finally run sample test `npm test`

After that you may upload test result file on JIRA instance 

## Upload test result file

please update these details in `upload.js` file. 
1. API Key - You can get this value by logging into your JIRA instance. Then click on QMetry Menu -> Automation API page. 
2. Base URL - QMetry Automation API URL. This information is also available in Automation API page. 
3. And Other optional params. Refer [QMetry docs](https://qmetrytestdocs.atlassian.net/wiki/) for more details.

##Licence
MIT

