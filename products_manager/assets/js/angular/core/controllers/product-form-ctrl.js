angular.module('mainModule')
    .controller('ProductFormCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductFactory',
      function ($scope, $state, $stateParams, ProductFactory) {
      
      $scope.$watch('selected_product', function(new_value, old_value){
        $scope.compute_total_value($scope.selected_product);
      }, true);
      
      if($state.current.name == 'index.products.product_form'){
        ProductFactory.getProduct($stateParams.product_id).then(function (selected_product) {
          $scope.selected_product = selected_product;
        }, function(cause){
          alert('Nie udało się pobrać danych o produktach');
        });
      }
      
      $scope.update = function(updated_product) {
        ProductFactory.updateProduct(updated_product).then(function (updated_product) {
          $scope.selected_product = updated_product;
          $scope.$parent.refresh();
          alert('Zaktualizowano dane produktu');
        }, function(cause){
          alert('Nie udało się zaktualizować danych produktu');
        });
      };
      
      $scope.delete = function(deleted_product) {
        ProductFactory.deleteProduct(deleted_product.id).then(function (deleted_product) {
          $state.go('index.products', { product_group_id: $stateParams.product_group_id });
          $scope.$parent.refresh();
          alert('Usunięto produkt');
        }, function(cause){
          alert('Nie udało się usunąć produktu z bazy');
        });
      };
      
    }]);