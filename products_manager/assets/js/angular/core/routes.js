angular.module('mainModule').config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "products_manager_index_view": {
          templateUrl: "static/products_manager/angular-templates/core/products_manager_index.html" 
        }
      }
    })
    /*
    .state('index.product_groups',{
      url: "/product_groups",
      views: {
        "product_group_list": { templateUrl: "static/products_manager/angular-templates/core/partials/product_group_list.html" }
      }
    })*/
    
    .state('index.products',{
      url: "/products/:product_group_id",
      views: {
        "product_list": { 
          templateUrl: "static/products_manager/angular-templates/core/partials/product_list.html",
          controller: 'ProductListCtrl'
        }
      }
    })

});
