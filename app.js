(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchItems = "";
    $scope.lunchType = ""

    $scope.CheckLunchType = function (){
      var numberOfLunchItems = parseLunch();
      if (numberOfLunchItems.length <= 3) {
        $scope.lunchType = "Enjoy!!";
      }
      else if (numberOfLunchItems.length > 3) {
        $scope.lunchType = "Too nuch!!";
      }
      else {
        $scope.lunchType = "Error";
      }
    };

    function parseLunch(){
      var words = $scope.lunchItems.split(',');
      return words;
    };

  }

})()
