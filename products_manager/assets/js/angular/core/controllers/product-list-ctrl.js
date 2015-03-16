angular.module('mainModule')
    .controller('ProductListCtrl', [
      '$scope',
      '$state',
      '$stateParams',
      'ProductGroupFactory',
      'ProductFactory',
      function ($scope, $state, $stateParams, ProductGroupFactory, ProductFactory) {
        
      product_template = {
        name: '---',
        description: '---',
        quantity: 0,
        price: 0
      };
      
      $scope.new_product = product_template;
      
      $scope.$on('$stateChangeSuccess', function(event){
        $scope.$watch('new_product', function(new_value, old_value){
            $scope.compute_total_value($scope.new_product);
        }, true);
      });
         
      $scope.add = function(new_product) {
        new_product.product_group_id = $stateParams.product_group_id;
        ProductFactory.addProduct(new_product).then(function (new_product) {
          $scope.new_product = product_template;
          $scope.refresh();
          alert('Dodano produkt');
        });
      };   
         
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