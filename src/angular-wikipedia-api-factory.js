"use strict";

angular.module("jtt_wikipedia", [])
    .factory('wikipediaFactory', ['$http', 'wikipediaSearchDataService', function ($http, wikipediaSearchDataService) {

        var wikipediaFactory = {};

        wikipediaFactory.searchArticles = function (_params) {

            var wikipediaSearchData = wikipediaSearchDataService.getNew("searchArticles", _params);

            return $http.jsonp(
                wikipediaSearchData.url,
                {
                    method: 'GET',
                    params: wikipediaSearchData.object,
                }
            );
        };

        return wikipediaFactory;
    }])
    .service('wikipediaSearchDataService', function () {
        this.getApiBaseUrl = function (_params) {
            return ".wikipedia.org/w/api.php";
        };

        this.fillDataInObjectByList = function (_object, _params, _list) {

            angular.forEach(_list, function (value, key) {
                if (angular.isDefined(_params[value])) {
                    _object.object[value] = _params[value];
                }
            });

            return _object;
        };

        this.getNew = function (_type, _params) {

            var wikipediaSearchData = {
                object: {
                    callback: "JSON_CALLBACK",
                    action: 'query',
                    prop: 'extracts|pageimages',
                    format: 'json',
                    formatversion: 2,
                },
                url: "",
            };

            if (angular.isUndefined(_params.lang)) {
                _params.lang = 'en'
            }

            if (angular.isDefined(_params.srlimit)) {
                wikipediaSearchData.object.srlimit = _params.srlimit;
            }

            switch (_type) {

                case "searchArticles":
                    wikipediaSearchData.object.generator = 'search';
                    wikipediaSearchData.object.gsrsearch = 'intitle:' + _params.term;
                    wikipediaSearchData.object.pilimit = 'max';
                    wikipediaSearchData.object.exlimit = 'max';
                    wikipediaSearchData.object.exintro = '';

                    wikipediaSearchData = this.fillDataInObjectByList(wikipediaSearchData, _params, [
                        'generator', 'gsrsearch', 'pilimit', 'exlimit', 'exintro'
                    ]);
                    wikipediaSearchData.url = 'https://' + _params.lang + this.getApiBaseUrl();
                    break;
            }
            return wikipediaSearchData;
        };
    });