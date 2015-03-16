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

        $scope.compute_total_value = function(product){
          try {
            product.value = product.price * product.quantity;
          }
          catch(err) {
              product.value = 0;
          }
        };
        
    }]);