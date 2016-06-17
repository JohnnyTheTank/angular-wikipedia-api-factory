**angular-wikipedia-api-factory** is an angularjs module with a wikipedia api factory.

[![npm version](https://badge.fury.io/js/angular-wikipedia-api-factory.png)](https://badge.fury.io/js/angular-wikipedia-api-factory)
[![Bower version](https://badge.fury.io/bo/angular-wikipedia-api-factory.png)](https://badge.fury.io/bo/angular-wikipedia-api-factory)
 
Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))


:warning: Work in progress

## Usage

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. `bower install --save angular-wikipedia-api-factory`
    2. `npm install --save angular-wikipedia-api-factory`
    3. download [angular-wikipedia-api-factory.zip](https://github.com/JohnnyTheTank/angular-wikipedia-api-factory/zipball/master)
2. Add `jtt_wikipedia` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:
    ```html
    <script src="bower_components/angular-wikipedia-api-factory/src/angular-wikipedia-api-factory.min.js"></script>
    ```
    2. When using npm:
    ```html
    <script src="node_modules/angular-wikipedia-api-factory/src/angular-wikipedia-api-factory.min.js"></script>
    ```
    3. when using downloaded files
    ```html
    <script src="angular-wikipedia-api-factory.min.js"></script>
    ```
4. Use the factory `wikipediaFactory`


### factory methods

#### searchArticles

```js
wikipediaFactory.searchArticles({
    term: "<TERM>", // Searchterm
    srlimit: "<SR_LIMIT>", // (optional) max result. valid values: 1-50 | default: 10
    pilimit: "<PI_LIMIT>", // (optional) 'max': images for all articles, otherwise only for the first
    exlimit: "<EX_LIMIT>", // (optional) 'max': extracts for all articles, otherwise only for the first
    exintro: "<EX_INTRO>", // (optional) 'max': extracts for all articles, otherwise only for the first
}).then(function (_data) {
    //on success
}).catch(function (_data) {
    //on error
});
```


## Wikipedia JSONP API

* Documentation: https://www.mediawiki.org/wiki/API:Main_page/en
* API Sandbox: https://www.mediawiki.org/wiki/Special:ApiSandbox

## License

MIT