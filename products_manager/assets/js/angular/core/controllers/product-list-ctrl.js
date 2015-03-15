angular.module('mainModule')
    .controller('ProductListCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductGroupFactory',
      function ($scope, $state, $stateParams, ProductGroupFactory) {
      if($state.current.name == 'index.products'){
        ProductGroupFactory.getProductGroup($stateParams.product_group_id).then(function (product_group) {
          $scope.product_group = product_group;
        });
      }
      $scope.xxx = 'xxx';

    }]);