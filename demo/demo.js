var ngDemo = angular.module('ngDemo', ['angular-konami']);

ngDemo.controller('MyCtrl', function ($scope) {
  $scope.isKonamiEnable = false;

  $scope.$on('konami-code-ok', function (event, args) {
    // args contains the element that emits the event
    angular.element(args).addClass('rainbow')
    $scope.isKonamiEnable = true;
    $scope.$apply();
  });
});
