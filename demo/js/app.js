var app = angular.module("app", ['jtt_wikipedia']);
app.controller('controller', ['$scope', 'wikipediaFactory', function($scope, wikipediaFactory) {

    wikipediaFactory.searchArticles({
        term:"Jonathan",
    }).then(function(_data){
        console.info("search articles", _data);
    });

}]);
