var app = angular.module("app", ['jtt_wikipedia']);
app.controller('controller', ['$scope', 'wikipediaFactory', function($scope, wikipediaFactory) {

    wikipediaFactory.searchArticlesByTitle({
        term:"Jonathan",
        lang:'de',
    }).then(function(_data){
        console.info("search articles by title", _data);
    });

}]);
