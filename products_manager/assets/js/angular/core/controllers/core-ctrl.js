angular.module('mainModule')
    .controller('CoreCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductGroupFactory',
      function ($scope, $state, $stateParams, ProductGroupFactory) {
       
        ProductGroupFactory.getProductGroupsList.then(function (product_groups) {
          $scope.product_groups = product_groups;
        });
    }]);