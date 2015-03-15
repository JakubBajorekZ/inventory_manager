angular.module('mainModule')
    .factory('ProductGroupFactory', ['Restangular', function (Restangular) {
      return {
        getProductGroupsList: Restangular.all('products_api/product_group/').getList(),
        getProductGroup: function(id){
          return Restangular.one('products_api/product_group', id).get();
        }
      }
    }]);