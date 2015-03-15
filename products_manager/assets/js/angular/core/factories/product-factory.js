angular.module('mainModule')
    .factory('ProductFactory', ['Restangular', function (Restangular) {
      return {
        getProductList: Restangular.all('products_api/product/').getList(),
        getTest: 'aaa'
      }
    }]);