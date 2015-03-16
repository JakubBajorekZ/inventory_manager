angular.module('mainModule')
    .controller('ProductFormCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductFactory',
      function ($scope, $state, $stateParams, ProductFactory) {
      
      if($state.current.name == 'index.products.product_form'){
        ProductFactory.getProduct($stateParams.product_id).then(function (selected_product) {
          $scope.selected_product = selected_product;
        });
      }
      
      $scope.update = function(updated_product) {
        ProductFactory.updateProduct(updated_product).then(function (updated_product) {
          $scope.selected_product = updated_product;
          $scope.$parent.refresh();
        });
      };
      
    }]);