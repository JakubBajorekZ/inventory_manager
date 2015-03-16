angular.module('mainModule')
    .controller('ProductFormCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductFactory',
      function ($scope, $state, $stateParams, ProductFactory) {
      
      $scope.new_product = {};
      
      if($state.current.name == 'index.products.product_form'){
        ProductFactory.getProduct($stateParams.product_id).then(function (selected_product) {
          $scope.selected_product = selected_product;
        });
      }
      
      $scope.add = function(new_product) {
        new_product.product_group_id = $stateParams.product_group_id;
        ProductFactory.addProduct(new_product).then(function (new_product) {
          $scope.new_product = {};
          $scope.$parent.refresh();
          alert('Dodano produkt');
        });
      };
      
      $scope.update = function(updated_product) {
        ProductFactory.updateProduct(updated_product).then(function (updated_product) {
          $scope.selected_product = updated_product;
          $scope.$parent.refresh();
          alert('Zaktualizowano dane produktu');
        });
      };
      
      $scope.delete = function(deleted_product) {
        ProductFactory.deleteProduct(deleted_product.id).then(function (deleted_product) {
          $state.go('index.products', { product_group_id: $stateParams.product_group_id });
          $scope.$parent.refresh();
          alert('Usunięto produkt');
        });
      };
      
    }]);