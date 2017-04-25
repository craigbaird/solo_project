var recipeApp = angular.module("recipeApp", ["ngMaterial"]);

recipeApp.controller("OneController", ["RecipeService", function(RecipeService){
  var ingredients = this;
  ingredients.submit = function(){
    var input = ingredients.input.title;
    RecipeService.getSpoonacular(input);
  }; // end ingredients.submit
  ingredients.infoFromApi = RecipeService.infoFromApi;
}]); // end OneController


recipeApp.controller("TwoController", ["$scope", "RecipeService", function($scope, RecipeService) {
  $scope.clear = function(){
    $scope.myModel = undefined;
  };
}]);



recipeApp.factory("RecipeService", ["$http", function($http){
  var infoFromApi = {};
    return {
      infoFromApi : infoFromApi,
      getSpoonacular : function(ingredients){
        $http.get("/recipe/" + ingredients).then(function(response){
        infoFromApi.response = response;
        console.log("data from Api", response);
        }); //end $http.get
      } //end getSpoonacular
    }; //end return
}]); // end recipeApp.factory
