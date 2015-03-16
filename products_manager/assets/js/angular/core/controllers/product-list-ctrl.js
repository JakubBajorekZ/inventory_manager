angular.module('mainModule')
    .controller('ProductListCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductGroupFactory',
      function ($scope, $state, $stateParams, ProductGroupFactory) {
         
      $scope.refresh = function(){
        state = $state.current.name;
        if((state == 'index.products') || (state == 'index.products.product_form')){
          ProductGroupFactory.getProductGroup($stateParams.product_group_id).then(function (product_group) {
            $scope.product_group = product_group;
          });
        }
      };
      
      $scope.refresh();

    }]);