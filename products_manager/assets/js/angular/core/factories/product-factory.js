angular.module('mainModule')
    .factory('ProductFactory', ['Restangular', function (Restangular) {
      return {
        getProduct: function(id){
          return Restangular.one('products_api/product', id).get();
        },
        updateProduct: function(updated_product){
          return Restangular.all('products_api/product').patch(updated_product);
        }
      }
    }]);