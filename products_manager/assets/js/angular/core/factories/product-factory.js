angular.module('mainModule')
    .factory('ProductFactory', ['Restangular', function (Restangular) {
      return {
        getProduct: function(id){
          return Restangular.one('products_api/product', id).get();
        },
        updateProduct: function(updated_product){
          return Restangular.all('products_api/product').patch(updated_product);
        },
        deleteProduct: function(id){
          return Restangular.one('products_api/product', id).remove();
        },
        addProduct: function(new_product){
          return Restangular.all('products_api/product').post(new_product);
        }
      }
    }]);